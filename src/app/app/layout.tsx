import { redirect } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { auth } from "@/modules/identity/auth";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <AppShell userName={session.user.name ?? session.user.email ?? "Learner"}>
      {children}
    </AppShell>
  );
}
