import Link from "next/link";
import { auth } from "@/modules/identity/auth";

export default async function HomePage() {
  const session = await auth();

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 10%, #d7ebe2 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 20%, #e8dfc8 0%, transparent 50%)",
        }}
      />
      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
        <p className="mb-4 text-sm tracking-[0.22em] text-[var(--ink-muted)] uppercase">
          Aprendizaje AI-Native
        </p>
        <h1 className="mb-5 text-6xl font-semibold tracking-tight text-[var(--ink)] md:text-7xl">
          ZUZU
        </h1>
        <p className="mb-4 max-w-xl text-xl leading-snug text-[var(--ink)]">
          Aprendé a pensar como ingeniero colaborando con IA.
        </p>
        <p className="mb-10 max-w-lg text-[var(--ink-muted)]">
          Path + Knowledge + un Mentor + Practice Project. La IA forma criterio;
          no escribe el producto por vos.
        </p>
        <div className="flex flex-wrap gap-3">
          {session?.user ? (
            <Link
              href="/app"
              className="rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white"
            >
              Continuar mi viaje
            </Link>
          ) : (
            <>
              <Link
                href="/register"
                className="rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white"
              >
                Empezar Capítulo 1
              </Link>
              <Link
                href="/login"
                className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm font-medium"
              >
                Iniciar sesión
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
