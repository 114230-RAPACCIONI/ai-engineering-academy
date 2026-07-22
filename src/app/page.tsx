import Link from "next/link";
import { auth } from "@/modules/identity/auth";

export default async function HomePage() {
  const session = await auth();

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
      <p className="mb-3 text-sm tracking-[0.2em] text-[var(--ink-muted)] uppercase">
        Plataforma AI-Native
      </p>
      <h1 className="mb-4 text-5xl font-semibold tracking-tight text-[var(--ink)] md:text-6xl">
        ZUZU
      </h1>
      <p className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--ink-muted)]">
        Aprendé a pensar como ingeniero de software colaborando con un Mentor de IA.
        No reemplaza tu criterio: lo forma.
      </p>
      <div className="flex flex-wrap gap-3">
        {session?.user ? (
          <Link
            href="/app"
            className="rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white"
          >
            Ir a mi viaje
          </Link>
        ) : (
          <>
            <Link
              href="/register"
              className="rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white"
            >
              Crear cuenta
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
    </main>
  );
}
