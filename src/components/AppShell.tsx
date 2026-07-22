"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutUser } from "@/modules/identity/actions";

const navItems = [
  { href: "/app", label: "Inicio", exact: true },
  { href: "/app/path", label: "Learning Path" },
  { href: "/app/knowledge", label: "Knowledge" },
  { href: "/app/projects", label: "Projects" },
  { href: "/app/mentor", label: "Mentor" },
  { href: "/app/progress", label: "Progress" },
  { href: "/app/profile", label: "Perfil" },
] as const;

type AppShellProps = {
  children: React.ReactNode;
  userName: string;
};

export function AppShell({ children, userName }: AppShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--surface)]/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/app" className="text-lg font-semibold tracking-tight">
            ZUZU
          </Link>
          <div className="flex items-center gap-3 text-sm text-[var(--ink-muted)]">
            <span className="hidden sm:inline">{userName}</span>
            <form action={logoutUser}>
              <button
                type="submit"
                className="rounded-md border border-[var(--line)] px-3 py-1.5 hover:bg-[var(--bg-deep)]"
              >
                Salir
              </button>
            </form>
          </div>
        </div>
        <nav className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 pb-3">
          {navItems.map((item) => {
            const exact = "exact" in item && item.exact;
            const active = exact
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "bg-[var(--accent-soft)] font-medium text-[var(--ink)]"
                    : "text-[var(--ink-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--ink)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
    </div>
  );
}
