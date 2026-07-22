import { NextResponse } from "next/server";
import { auth } from "@/modules/identity/auth";
import { prisma } from "@/lib/prisma";
import { AnthropicProvider } from "@/modules/mentor/adapters/AnthropicProvider";
import { getLLMProvider } from "@/modules/mentor/provider";
import {
  MENTOR_SYSTEM_PROMPT,
  buildMentorContext,
} from "@/modules/mentor/service";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const body = (await req.json()) as {
    conversationId: string;
    message: string;
  };

  const content = body.message?.trim();
  if (!content || !body.conversationId) {
    return NextResponse.json({ error: "Mensaje inválido" }, { status: 400 });
  }

  const conversation = await prisma.conversation.findFirst({
    where: { id: body.conversationId, userId: session.user.id },
    include: {
      messages: { orderBy: { createdAt: "asc" }, take: 30 },
    },
  });

  if (!conversation) {
    return NextResponse.json({ error: "Conversación no encontrada" }, { status: 404 });
  }

  await prisma.message.create({
    data: {
      conversationId: conversation.id,
      role: "user",
      content,
    },
  });

  let provider;
  try {
    provider = getLLMProvider();
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Mentor no configurado" },
      { status: 503 },
    );
  }

  if (!(provider instanceof AnthropicProvider)) {
    return NextResponse.json(
      { error: "Solo Anthropic está implementado en el MVP." },
      { status: 501 },
    );
  }

  const context = await buildMentorContext(session.user.id);
  const history = [
    ...conversation.messages.map((m) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    })),
    { role: "user" as const, content },
  ];

  const result = provider.stream({
    system: `${MENTOR_SYSTEM_PROMPT}\n\n---\nContexto del learner:\n${context}`,
    messages: history,
    onFinish: async (text) => {
      await prisma.message.create({
        data: {
          conversationId: conversation.id,
          role: "assistant",
          content: text,
        },
      });
      await prisma.conversation.update({
        where: { id: conversation.id },
        data: { updatedAt: new Date() },
      });
    },
  });

  return result.toTextStreamResponse();
}
