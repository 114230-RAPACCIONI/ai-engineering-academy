import { prisma } from "@/lib/prisma";

export const CHAPTER_01 = "chapter-01";
export const CHAPTER_02 = "chapter-02";
export const CHAPTER_03 = "chapter-03";
export const CHAPTER_04 = "chapter-04";

export async function listLearningPaths() {
  return prisma.learningPath.findMany({
    orderBy: { order: "asc" },
    include: {
      modules: { orderBy: { order: "asc" }, select: { id: true } },
    },
  });
}

export async function getOrCreateJourney(
  userId: string,
  pathSlug: string = CHAPTER_01,
) {
  const path = await prisma.learningPath.findUnique({
    where: { slug: pathSlug },
    include: { modules: { orderBy: { order: "asc" } } },
  });

  if (!path || path.modules.length === 0) {
    throw new Error(
      `Learning Path "${pathSlug}" no seedado. Ejecutá: npm run db:seed`,
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

/** Cap. 2 requiere Cap. 1 journey completed (CHAPTER_02 prerrequisito). */
export async function isChapter2Unlocked(userId: string) {
  try {
    const ch1 = await getOrCreateJourney(userId, CHAPTER_01);
    return ch1.status === "completed";
  } catch {
    return false;
  }
}

/** Cap. 3 requiere Cap. 2 journey completed (CHAPTER_03 prerrequisito). */
export async function isChapter3Unlocked(userId: string) {
  try {
    const unlocked2 = await isChapter2Unlocked(userId);
    if (!unlocked2) return false;
    const ch2 = await getOrCreateJourney(userId, CHAPTER_02);
    return ch2.status === "completed";
  } catch {
    return false;
  }
}

/** Cap. 4 requiere Cap. 3 journey completed (puente CHAPTER_03 §14.2). */
export async function isChapter4Unlocked(userId: string) {
  try {
    const unlocked3 = await isChapter3Unlocked(userId);
    if (!unlocked3) return false;
    const ch3 = await getOrCreateJourney(userId, CHAPTER_03);
    return ch3.status === "completed";
  } catch {
    return false;
  }
}

export async function getModuleForUser(userId: string, moduleSlug: string) {
  const mod = await prisma.module.findFirst({
    where: { slug: moduleSlug },
    include: { path: true },
  });
  if (!mod) return null;

  if (mod.path.slug === CHAPTER_02) {
    const unlocked = await isChapter2Unlocked(userId);
    if (!unlocked) {
      return { locked: true as const, module: mod, journey: null, progress: null };
    }
  }

  if (mod.path.slug === CHAPTER_03) {
    const unlocked = await isChapter3Unlocked(userId);
    if (!unlocked) {
      return { locked: true as const, module: mod, journey: null, progress: null };
    }
  }

  if (mod.path.slug === CHAPTER_04) {
    const unlocked = await isChapter4Unlocked(userId);
    if (!unlocked) {
      return { locked: true as const, module: mod, journey: null, progress: null };
    }
  }

  const journey = await getOrCreateJourney(userId, mod.path.slug);
  const progress = journey.progress.find((p) => p.moduleId === mod.id);
  return { locked: false as const, journey, module: mod, progress };
}

export async function startModule(userId: string, moduleId: string) {
  const mod = await prisma.module.findUnique({
    where: { id: moduleId },
    include: { path: true },
  });
  if (!mod) return;

  const journey = await getOrCreateJourney(userId, mod.path.slug);
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
  const mod = await prisma.module.findUnique({
    where: { id: moduleId },
    include: { path: true },
  });
  if (!mod) return;

  const journey = await getOrCreateJourney(userId, mod.path.slug);
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
