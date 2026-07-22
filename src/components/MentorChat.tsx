"use client";

import { useState, useTransition } from "react";

type ChatMessage = {
  id: string;
  role: string;
  content: string;
};

type MentorChatProps = {
  conversationId: string;
  initialMessages: ChatMessage[];
  configured: boolean;
  configError?: string;
};

export function MentorChat({
  conversationId,
  initialMessages,
  configured,
  configError,
}: MentorChatProps) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function send() {
    const text = input.trim();
    if (!text || pending) return;

    setInput("");
    setError(null);
    const userMsg: ChatMessage = {
      id: `local-${Date.now()}`,
      role: "user",
      content: text,
    };
    setMessages((prev) => [...prev, userMsg]);

    startTransition(async () => {
      try {
        const res = await fetch("/api/mentor/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ conversationId, message: text }),
        });

        if (!res.ok) {
          const data = (await res.json().catch(() => null)) as {
            error?: string;
          } | null;
          setError(data?.error ?? "No se pudo contactar al Mentor.");
          return;
        }

        const reader = res.body?.getReader();
        if (!reader) {
          setError("Respuesta sin stream.");
          return;
        }

        const decoder = new TextDecoder();
        let assistant = "";
        const assistantId = `assistant-${Date.now()}`;
        setMessages((prev) => [
          ...prev,
          { id: assistantId, role: "assistant", content: "" },
        ]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          assistant += decoder.decode(value, { stream: true });
          const snapshot = assistant;
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: snapshot } : m,
            ),
          );
        }
      } catch {
        setError("Error de red al hablar con el Mentor.");
      }
    });
  }

  return (
    <div className="flex flex-col gap-4">
      {!configured ? (
        <div className="rounded-lg border border-amber-700/40 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          {configError ??
            "Configurá ANTHROPIC_API_KEY en .env para activar el Mentor."}
        </div>
      ) : null}

      <div className="min-h-[280px] space-y-3 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4">
        {messages.length === 0 ? (
          <p className="text-sm text-[var(--ink-muted)]">
            Empezá con una pregunta de clarificación. Ej: “¿Mi problem statement
            esconde una solución?”
          </p>
        ) : (
          messages.map((m) => (
            <div
              key={m.id}
              className={`text-sm leading-relaxed ${
                m.role === "user" ? "text-[var(--ink)]" : "text-[var(--ink-muted)]"
              }`}
            >
              <span className="mb-1 block text-xs font-medium tracking-wide uppercase">
                {m.role === "user" ? "Vos" : "Mentor"}
              </span>
              <p className="whitespace-pre-wrap">{m.content}</p>
            </div>
          ))
        )}
      </div>

      {error ? (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <div className="flex gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={2}
          disabled={!configured || pending}
          placeholder="Escribile al Mentor…"
          className="flex-1 rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm disabled:opacity-60"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
        />
        <button
          type="button"
          onClick={send}
          disabled={!configured || pending || !input.trim()}
          className="self-end rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
        >
          {pending ? "…" : "Enviar"}
        </button>
      </div>
    </div>
  );
}
