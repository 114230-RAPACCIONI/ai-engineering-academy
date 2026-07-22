import { redirect } from "next/navigation";
import { ProfileForm } from "@/components/ProfileForm";
import { auth } from "@/modules/identity/auth";
import { prisma } from "@/lib/prisma";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });
  if (!user) redirect("/login");

  return (
    <section>
      <h1 className="mb-2 text-3xl font-semibold">Perfil</h1>
      <p className="mb-8 text-[var(--ink-muted)]">
        Objetivos y experiencia. El Mentor los usa como contexto.
      </p>
      <ProfileForm
        userId={user.id}
        name={user.name}
        email={user.email}
        experience={user.experience}
        objectives={user.objectives}
      />
    </section>
  );
}
