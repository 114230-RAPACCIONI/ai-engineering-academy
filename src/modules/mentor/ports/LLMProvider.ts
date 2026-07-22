export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export type StreamChatInput = {
  system: string;
  messages: ChatMessage[];
};

/**
 * Port del Mentor (ADR-001 / ADR-009).
 * El dominio depende de esto, no del SDK del vendor.
 */
export interface LLMProvider {
  readonly id: string;
  streamChat(input: StreamChatInput): Promise<ReadableStream<Uint8Array>>;
}
