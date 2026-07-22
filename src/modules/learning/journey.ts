import { prisma } from "@/lib/prisma";

const PATH_SLUG = "chapter-01";

export async function getOrCreateJourney(userId: string) {
  const path = await prisma.learningPath.findUnique({
    where: { slug: PATH_SLUG },
    include: { modules: { orderBy: { order: "asc" } } },
  });

  if (!path || path.modules.length === 0) {
    throw new Error(
      "Learning Path no seedado. Ejecutá: npx tsx prisma/seed.ts",
    );
  }

  let journey = await prisma.learningJourney.findUnique({
    where: {
      userId_pathId: { userId, pathId: path.id },
    },
    include: {
      progress: true,
      path: {
        include: { modules: { orderBy: { order: "asc" } } },
      },
    },
  });

  if (!journey) {
    journey = await prisma.learningJourney.create({
      data: {
        userId,
        pathId: path.id,
        currentModuleId: path.modules[0]?.id,
        progress: {
          create: path.modules.map((m, index) => ({
            moduleId: m.id,
            status: index === 0 ? "in_progress" : "not_started",
          })),
        },
      },
      include: {
        progress: true,
        path: {
          include: { modules: { orderBy: { order: "asc" } } },
        },
      },
    });
  }

  return journey;
}

export async function getModuleForUser(userId: string, moduleSlug: string) {
  const journey = await getOrCreateJourney(userId);
  const mod = journey.path.modules.find((m) => m.slug === moduleSlug);
  if (!mod) return null;

  const progress = journey.progress.find((p) => p.moduleId === mod.id);
  return { journey, module: mod, progress };
}

export async function startModule(userId: string, moduleId: string) {
  const journey = await getOrCreateJourney(userId);
  await prisma.moduleProgress.update({
    where: {
      journeyId_moduleId: { journeyId: journey.id, moduleId },
    },
    data: { status: "in_progress", completedAt: null },
  });
  await prisma.learningJourney.update({
    where: { id: journey.id },
    data: { currentModuleId: moduleId },
  });
}

export async function completeModule(userId: string, moduleId: string) {
  const journey = await getOrCreateJourney(userId);
  const modules = journey.path.modules;
  const currentIndex = modules.findIndex((m) => m.id === moduleId);
  if (currentIndex < 0) return;

  await prisma.moduleProgress.update({
    where: {
      journeyId_moduleId: { journeyId: journey.id, moduleId },
    },
    data: { status: "completed", completedAt: new Date() },
  });

  const next = modules[currentIndex + 1];
  if (next) {
    const nextProgress = journey.progress.find((p) => p.moduleId === next.id);
    if (nextProgress?.status === "not_started") {
      await prisma.moduleProgress.update({
        where: {
          journeyId_moduleId: {
            journeyId: journey.id,
            moduleId: next.id,
          },
        },
        data: { status: "in_progress" },
      });
    }
    await prisma.learningJourney.update({
      where: { id: journey.id },
      data: { currentModuleId: next.id },
    });
  } else {
    await prisma.learningJourney.update({
      where: { id: journey.id },
      data: { status: "completed", currentModuleId: moduleId },
    });
  }
}

export function progressSummary(
  modules: { id: string }[],
  progress: { moduleId: string; status: string }[],
) {
  const completed = progress.filter((p) => p.status === "completed").length;
  const total = modules.length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { completed, total, percent };
}
