import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/modules/identity/auth";
import {
  CHAPTER_01,
  CHAPTER_02,
  CHAPTER_03,
  CHAPTER_04,
  getOrCreateJourney,
  isChapter2Unlocked,
  isChapter3Unlocked,
  isChapter4Unlocked,
  listLearningPaths,
  progressSummary,
} from "@/modules/learning/journey";

export default async function PathIndexPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const paths = await listLearningPaths();
  const unlockedCh2 = await isChapter2Unlocked(session.user.id);
  const unlockedCh3 = await isChapter3Unlocked(session.user.id);
  const unlockedCh4 = await isChapter4Unlocked(session.user.id);

  const cards = await Promise.all(
    paths.map(async (path) => {
      const locked =
        (path.slug === CHAPTER_02 && !unlockedCh2) ||
        (path.slug === CHAPTER_03 && !unlockedCh3) ||
        (path.slug === CHAPTER_04 && !unlockedCh4);
      let percent = 0;
      let status = "locked";
      if (!locked) {
        const journey = await getOrCreateJourney(session.user!.id, path.slug);
        percent = progressSummary(journey.path.modules, journey.progress).percent;
        status = journey.status;
      }
      return { path, locked, percent, status };
    }),
  );

  const unlockHint: Record<string, { href: string; label: string }> = {
    [CHAPTER_02]: { href: `/app/path/c/${CHAPTER_01}`, label: "Cap. 1" },
    [CHAPTER_03]: { href: `/app/path/c/${CHAPTER_02}`, label: "Cap. 2" },
    [CHAPTER_04]: { href: `/app/path/c/${CHAPTER_03}`, label: "Cap. 3" },
  };

  return (
    <div className="space-y-8">
      <section>
        <p className="mb-2 text-xs tracking-[0.15em] text-[var(--ink-muted)] uppercase">
          Learning Path
        </p>
        <h1 className="mb-2 text-3xl font-semibold tracking-tight">
          Tu viaje SDD
        </h1>
        <p className="max-w-2xl text-[var(--ink-muted)]">
          Cap. 1 → Cap. 2 → Cap. 3 → Cap. 4. Cada capítulo se desbloquea al
          cerrar el Path del anterior.
        </p>
      </section>

      <ul className="space-y-4">
        {cards.map(({ path, locked, percent, status }) => (
          <li key={path.id}>
            {locked ? (
              <div className="rounded-xl border border-dashed border-[var(--line)] bg-[var(--surface)] p-5 opacity-80">
                <p className="text-xs tracking-wide text-[var(--ink-muted)] uppercase">
                  Capítulo {path.chapter} · Bloqueado
                </p>
                <h2 className="mt-1 text-xl font-medium">{path.title}</h2>
                <p className="mt-2 text-sm text-[var(--ink-muted)]">
                  {path.description}
                </p>
                <p className="mt-3 text-sm text-[var(--ink-muted)]">
                  Completá el Path del capítulo anterior para desbloquear.
                  {unlockHint[path.slug] ? (
                    <>
                      {" "}
                      <Link
                        href={unlockHint[path.slug].href}
                        className="text-[var(--accent)] underline"
                      >
                        {unlockHint[path.slug].label}
                      </Link>
                    </>
                  ) : null}
                </p>
              </div>
            ) : (
              <Link
                href={`/app/path/c/${path.slug}`}
                className="block rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]"
              >
                <p className="text-xs tracking-wide text-[var(--ink-muted)] uppercase">
                  Capítulo {path.chapter}
                  {status === "completed" ? " · Completado" : ""}
                </p>
                <h2 className="mt-1 text-xl font-medium">{path.title}</h2>
                <p className="mt-2 text-sm text-[var(--ink-muted)]">
                  {path.description}
                </p>
                <div className="mt-4">
                  <div className="mb-1 flex justify-between text-xs text-[var(--ink-muted)]">
                    <span>Progreso</span>
                    <span>{percent}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-[var(--bg-deep)]">
                    <div
                      className="h-full rounded-full bg-[var(--accent)]"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
