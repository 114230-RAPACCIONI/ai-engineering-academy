type PlaceholderProps = {
  title: string;
  description: string;
  phase: string;
};

export function PlaceholderPage({ title, description, phase }: PlaceholderProps) {
  return (
    <section className="max-w-2xl">
      <p className="mb-2 text-xs tracking-[0.15em] text-[var(--ink-muted)] uppercase">
        {phase}
      </p>
      <h1 className="mb-3 text-3xl font-semibold">{title}</h1>
      <p className="mb-6 text-[var(--ink-muted)]">{description}</p>
      <div className="rounded-lg border border-dashed border-[var(--line)] bg-[var(--surface)] px-4 py-6 text-sm text-[var(--ink-muted)]">
        Sección navegable. La lógica completa llega en la fase indicada.
      </div>
    </section>
  );
}
