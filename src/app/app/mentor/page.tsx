import { redirect } from "next/navigation";
import { DecisionLog } from "@/components/DecisionLog";
import { MentorChat } from "@/components/MentorChat";
import { auth } from "@/modules/identity/auth";
import { startNewMentorSession } from "@/modules/mentor/actions";
import {
  getOrCreateConversation,
  listDecisions,
} from "@/modules/mentor/service";

export default async function MentorPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const conversation = await getOrCreateConversation(session.user.id);
  const decisions = await listDecisions(session.user.id);

  const configured = Boolean(process.env.ANTHROPIC_API_KEY);
  const configError = configured
    ? undefined
    : "Falta ANTHROPIC_API_KEY en .env. Sin ella el chat no puede llamar al proveedor.";

  return (
    <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
      <section className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-2 text-xs tracking-[0.15em] text-[var(--ink-muted)] uppercase">
              Mentor
            </p>
            <h1 className="text-3xl font-semibold">Sesión de mentoría</h1>
            <p className="mt-2 max-w-xl text-sm text-[var(--ink-muted)]">
              Un Mentor que enseña y pregunta. No construye el producto por vos.
            </p>
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

        <MentorChat
          conversationId={conversation.id}
          initialMessages={conversation.messages.map((m) => ({
            id: m.id,
            role: m.role,
            content: m.content,
          }))}
          configured={configured}
          configError={configError}
        />
      </section>

      <DecisionLog
        decisions={decisions.map((d) => ({
          id: d.id,
          decision: d.decision,
          reason: d.reason,
          createdAt: d.createdAt.toISOString(),
        }))}
      />
    </div>
  );
}
