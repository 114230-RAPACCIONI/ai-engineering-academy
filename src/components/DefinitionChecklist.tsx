import Link from "next/link";
import type { ChecklistItem } from "@/modules/projects/checklist";

type Props = {
  items: ChecklistItem[];
  title?: string;
  subtitle?: string;
};

export function DefinitionChecklist({
  items,
  title = "Definition of Done — Cap. 1",
  subtitle = "Marcá el progreso con evidencia, no con sensación.",
}: Props) {
  const done = items.filter((i) => i.done).length;

  return (
    <section className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5">
      <div className="mb-4">
        <h2 className="font-medium">{title}</h2>
        <p className="mt-1 text-sm text-[var(--ink-muted)]">{subtitle}</p>
        <p className="mt-2 text-sm">
          {done}/{items.length} criterios
        </p>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-3 rounded-lg border border-[var(--line)] bg-[var(--bg)]/50 px-3 py-2.5 text-sm"
          >
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                item.done
                  ? "bg-[var(--accent)] text-white"
                  : "border border-[var(--line)] text-[var(--ink-muted)]"
              }`}
              aria-hidden
            >
              {item.done ? "✓" : ""}
            </span>
            <div className="min-w-0">
              <p className={item.done ? "text-[var(--ink)]" : "text-[var(--ink-muted)]"}>
                {item.label}
              </p>
              {!item.done && item.href ? (
                <Link
                  href={item.href}
                  className="mt-1 inline-block text-xs text-[var(--accent)] underline"
                >
                  Completar
                </Link>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
