import { redirect } from "next/navigation";
import { PathJourney } from "@/components/PathJourney";
import { auth } from "@/modules/identity/auth";
import {
  getOrCreateJourney,
  progressSummary,
} from "@/modules/learning/journey";

export default async function PathPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const journey = await getOrCreateJourney(session.user.id);
  const summary = progressSummary(journey.path.modules, journey.progress);

  return (
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
    />
  );
}
