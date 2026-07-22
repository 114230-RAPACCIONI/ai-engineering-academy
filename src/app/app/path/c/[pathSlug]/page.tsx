import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { PathJourney } from "@/components/PathJourney";
import { auth } from "@/modules/identity/auth";
import {
  CHAPTER_02,
  CHAPTER_03,
  CHAPTER_04,
  getOrCreateJourney,
  isChapter2Unlocked,
  isChapter3Unlocked,
  isChapter4Unlocked,
  progressSummary,
} from "@/modules/learning/journey";

type PageProps = {
  params: Promise<{ pathSlug: string }>;
};

export default async function ChapterJourneyPage({ params }: PageProps) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const { pathSlug } = await params;

  if (pathSlug === CHAPTER_02) {
    const unlocked = await isChapter2Unlocked(session.user.id);
    if (!unlocked) {
      return (
        <div className="max-w-xl space-y-4">
          <Link href="/app/path" className="text-sm text-[var(--ink-muted)]">
            ← Learning Path
          </Link>
          <h1 className="text-2xl font-semibold">Capítulo 2 bloqueado</h1>
          <p className="text-[var(--ink-muted)]">
            El curriculum exige Cap. 1 completado (Path cerrado) antes de
            Requirements.
          </p>
          <Link
            href="/app/path/c/chapter-01"
            className="inline-block text-[var(--accent)] underline"
          >
            Ir al Capítulo 1
          </Link>
        </div>
      );
    }
  }

  if (pathSlug === CHAPTER_03) {
    const unlocked = await isChapter3Unlocked(session.user.id);
    if (!unlocked) {
      return (
        <div className="max-w-xl space-y-4">
          <Link href="/app/path" className="text-sm text-[var(--ink-muted)]">
            ← Learning Path
          </Link>
          <h1 className="text-2xl font-semibold">Capítulo 3 bloqueado</h1>
          <p className="text-[var(--ink-muted)]">
            El curriculum exige Cap. 2 completado antes de Design.
          </p>
          <Link
            href="/app/path/c/chapter-02"
            className="inline-block text-[var(--accent)] underline"
          >
            Ir al Capítulo 2
          </Link>
        </div>
      );
    }
  }

  if (pathSlug === CHAPTER_04) {
    const unlocked = await isChapter4Unlocked(session.user.id);
    if (!unlocked) {
      return (
        <div className="max-w-xl space-y-4">
          <Link href="/app/path" className="text-sm text-[var(--ink-muted)]">
            ← Learning Path
          </Link>
          <h1 className="text-2xl font-semibold">Capítulo 4 bloqueado</h1>
          <p className="text-[var(--ink-muted)]">
            El curriculum exige Cap. 3 completado antes de Implement (I1).
          </p>
          <Link
            href="/app/path/c/chapter-03"
            className="inline-block text-[var(--accent)] underline"
          >
            Ir al Capítulo 3
          </Link>
        </div>
      );
    }
  }

  let journey;
  try {
    journey = await getOrCreateJourney(session.user.id, pathSlug);
  } catch {
    notFound();
  }

  const summary = progressSummary(journey.path.modules, journey.progress);

  return (
    <div className="space-y-4">
      <Link href="/app/path" className="text-sm text-[var(--ink-muted)]">
        ← Todos los capítulos
      </Link>
      <PathJourney
        pathTitle={journey.path.title}
        pathDescription={journey.path.description}
        modules={journey.path.modules}
        progress={journey.progress}
        currentModuleId={journey.currentModuleId}
        journeyStatus={journey.status}
        percent={summary.percent}
        completed={summary.completed}
        total={summary.total}
        chapter={journey.path.chapter}
      />
    </div>
  );
}
