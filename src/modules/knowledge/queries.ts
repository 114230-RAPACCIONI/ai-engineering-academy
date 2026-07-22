import { prisma } from "@/lib/prisma";

export async function listConcepts(query?: string) {
  const q = query?.trim().toLowerCase();
  const concepts = await prisma.knowledgeConcept.findMany({
    orderBy: { order: "asc" },
    include: { module: { select: { slug: true, title: true } } },
  });

  if (!q) return concepts;

  return concepts.filter((c) => {
    const haystack = `${c.title} ${c.summary} ${c.explanation}`.toLowerCase();
    return haystack.includes(q);
  });
}

export async function getConceptBySlug(slug: string) {
  return prisma.knowledgeConcept.findUnique({
    where: { slug },
    include: { module: { select: { slug: true, title: true } } },
  });
}

export async function getRelatedConcepts(relatedSlugs: string) {
  const slugs = relatedSlugs
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (slugs.length === 0) return [];
  return prisma.knowledgeConcept.findMany({
    where: { slug: { in: slugs } },
    orderBy: { order: "asc" },
  });
}
