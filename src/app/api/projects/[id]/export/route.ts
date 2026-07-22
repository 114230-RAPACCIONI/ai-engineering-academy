import JSZip from "jszip";
import { NextResponse } from "next/server";
import { auth } from "@/modules/identity/auth";
import { prisma } from "@/lib/prisma";
import {
  buildPracticeMarkdown,
  getProjectForUser,
} from "@/modules/projects/service";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_req: Request, context: RouteContext) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const { id } = await context.params;
  const project = await getProjectForUser(session.user.id, id);
  if (!project) {
    return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  }

  const decisions = await prisma.decisionLogEntry.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "asc" },
  });

  const decisionMd =
    decisions.length === 0
      ? "# Decision log\n\n(sin entradas)\n"
      : `# Decision log\n\n${decisions
          .map(
            (d, i) =>
              `## ${i + 1}. ${d.decision}\n\n**Razón:** ${d.reason}\n\n_${d.createdAt.toISOString()}_\n`,
          )
          .join("\n")}`;

  const zip = new JSZip();
  zip.file("PRACTICE_PROJECT.md", buildPracticeMarkdown(project));
  zip.file("DECISION_LOG.md", decisionMd);
  zip.file(
    "README.md",
    `# ${project.title}\n\nExport desde ZUZU — fase ${project.status}.\n\nArtefactos de planeamiento del learner. No es código de producto.\n`,
  );

  const buffer = await zip.generateAsync({ type: "nodebuffer" });
  const filename = `${project.title.replace(/[^\w\-]+/g, "_").toLowerCase() || "practice-project"}.zip`;

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
