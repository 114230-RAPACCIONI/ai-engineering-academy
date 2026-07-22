import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import type { LLMProvider, StreamChatInput } from "../ports/LLMProvider";

const DEFAULT_MODEL = "claude-sonnet-4-20250514";

export class AnthropicProvider implements LLMProvider {
  readonly id = "anthropic";

  stream(input: StreamChatInput & { onFinish?: (text: string) => Promise<void> }) {
    return streamText({
      model: anthropic(process.env.AI_MODEL ?? DEFAULT_MODEL),
      system: input.system,
      messages: input.messages
        .filter((m) => m.role !== "system")
        .map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      async onFinish({ text }) {
        if (input.onFinish) await input.onFinish(text);
      },
    });
  }

  async streamChat(input: StreamChatInput): Promise<ReadableStream<Uint8Array>> {
    const result = this.stream(input);
    return result.toTextStreamResponse().body!;
  }
}
