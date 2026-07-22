import Link from "next/link";
import { redirect } from "next/navigation";
import { DecisionLog } from "@/components/DecisionLog";
import { MentorChat } from "@/components/MentorChat";
import { auth } from "@/modules/identity/auth";
import { startNewMentorSession } from "@/modules/mentor/actions";
import { promptsForModule } from "@/modules/mentor/prompts";
import {
  getOrCreateConversation,
  listDecisions,
} from "@/modules/mentor/service";
import {
  CHAPTER_01,
  CHAPTER_02,
  CHAPTER_03,
  CHAPTER_04,
  getOrCreateJourney,
  isChapter2Unlocked,
  isChapter3Unlocked,
  isChapter4Unlocked,
} from "@/modules/learning/journey";

export default async function MentorPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const conversation = await getOrCreateConversation(session.user.id);
  const decisions = await listDecisions(session.user.id);

  let currentModuleTitle: string | null = null;
  let moduleSlug: string | null = null;
  try {
    const unlocked2 = await isChapter2Unlocked(session.user.id);
    const unlocked3 = await isChapter3Unlocked(session.user.id);
    const unlocked4 = await isChapter4Unlocked(session.user.id);

    let journey = await getOrCreateJourney(session.user.id, CHAPTER_01);

    if (unlocked2) {
      const j2 = await getOrCreateJourney(session.user.id, CHAPTER_02);
      if (j2.status !== "completed" || journey.status === "completed") {
        journey = j2;
      }
    }
    if (unlocked3) {
      const j3 = await getOrCreateJourney(session.user.id, CHAPTER_03);
      if (j3.status !== "completed" || journey.status === "completed") {
        journey = j3;
      }
    }
    if (unlocked4) {
      const j4 = await getOrCreateJourney(session.user.id, CHAPTER_04);
      if (j4.status !== "completed" || journey.status === "completed") {
        journey = j4;
      }
    }

    const current = journey.path.modules.find(
      (m) => m.id === journey.currentModuleId,
    );
    currentModuleTitle = current?.title ?? null;
    moduleSlug = current?.slug ?? null;
  } catch {
    // seed missing
  }

  const configured = Boolean(process.env.ANTHROPIC_API_KEY?.trim());
  const configError = configured
    ? undefined
    : "Falta ANTHROPIC_API_KEY en .env.";

  const prompts = promptsForModule(moduleSlug);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mb-2 text-xs tracking-[0.15em] text-[var(--ink-muted)] uppercase">
            Mentor
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Sesión de mentoría
          </h1>
          <p className="mt-2 max-w-xl text-sm text-[var(--ink-muted)]">
            Enseña y pregunta. No construye el producto por vos.
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <Link href="/app/path" className="text-[var(--accent)] underline">
              Volver al Path
            </Link>
            <Link
              href="/app/projects"
              className="text-[var(--ink-muted)] underline"
            >
              Practice Project
            </Link>
          </div>
        </div>
        <form action={startNewMentorSession}>
          <button
            type="submit"
            className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm"
          >
            Nueva sesión
          </button>
        </form>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <MentorChat
          conversationId={conversation.id}
          initialMessages={conversation.messages.map((m) => ({
            id: m.id,
            role: m.role,
            content: m.content,
          }))}
          configured={configured}
          configError={configError}
          prompts={prompts}
          currentModuleTitle={currentModuleTitle}
        />

        <DecisionLog
          decisions={decisions.map((d) => ({
            id: d.id,
            decision: d.decision,
            reason: d.reason,
            createdAt: d.createdAt.toISOString(),
          }))}
        />
      </div>
    </div>
  );
}
