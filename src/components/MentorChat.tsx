"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { saveMentorReflection } from "@/modules/mentor/actions";
import type { MentorPrompt } from "@/modules/mentor/prompts";

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
  prompts: MentorPrompt[];
  currentModuleTitle?: string | null;
};

export function MentorChat({
  conversationId,
  initialMessages,
  configured,
  configError,
  prompts,
  currentModuleTitle,
}: MentorChatProps) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  function applyPrompt(prompt: MentorPrompt) {
    setInput(prompt.text);
    setError(null);
  }

  function sendToMentor() {
    const text = input.trim();
    if (!text || pending || !configured) return;

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

  function saveReflection() {
    const text = input.trim();
    if (!text || pending) return;

    startTransition(async () => {
      const result = await saveMentorReflection(conversationId, text);
      if (!result.ok) {
        setError(result.error ?? "No se pudo guardar la nota.");
        return;
      }
      setInput("");
      setError(null);
      router.refresh();
      setMessages((prev) => [
        ...prev,
        { id: `u-${Date.now()}`, role: "user", content: text },
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          content:
            "Nota de reflexión guardada. Cuando configures ANTHROPIC_API_KEY, el Mentor podrá responderte en vivo. Esta nota ya cuenta como evidencia de sesión del Capítulo 1.",
        },
      ]);
    });
  }

  return (
    <div className="flex flex-col gap-4">
      {!configured ? (
        <div className="rounded-xl border border-amber-700/30 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          <p className="font-medium">Mentor en modo reflexión</p>
          <p className="mt-1">
            {configError ??
              "Sin ANTHROPIC_API_KEY el chat no llama a Claude."}{" "}
            Igual podés usar los prompts y <strong>guardar notas</strong> como
            evidencia del Cap. 1.
          </p>
        </div>
      ) : null}

      {currentModuleTitle ? (
        <p className="text-sm text-[var(--ink-muted)]">
          Contexto del Path:{" "}
          <span className="font-medium text-[var(--ink)]">
            {currentModuleTitle}
          </span>
        </p>
      ) : null}

      <div>
        <p className="mb-2 text-xs tracking-wide text-[var(--ink-muted)] uppercase">
          Prompts sugeridos
        </p>
        <div className="flex flex-wrap gap-2">
          {prompts.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => applyPrompt(p)}
              className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-xs hover:border-[var(--accent)]"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[280px] space-y-4 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
        {messages.length === 0 ? (
          <p className="text-sm text-[var(--ink-muted)]">
            Elegí un prompt o escribí una pregunta de clarificación. El Mentor
            no escribe el producto por vos.
          </p>
        ) : (
          messages.map((m) => (
            <div
              key={m.id}
              className={`rounded-lg px-3 py-2 text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-[var(--accent-soft)]/50 text-[var(--ink)]"
                  : "bg-[var(--bg)] text-[var(--ink-muted)]"
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

      <div className="flex flex-col gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={4}
          disabled={pending}
          placeholder="Escribile al Mentor o pegá tu artefactos para pedir feedback…"
          className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm disabled:opacity-60"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey && configured) {
              e.preventDefault();
              sendToMentor();
            }
          }}
        />
        <div className="flex flex-wrap gap-2">
          {configured ? (
            <button
              type="button"
              onClick={sendToMentor}
              disabled={pending || !input.trim()}
              className="rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60"
            >
              {pending ? "Pensando…" : "Enviar al Mentor"}
            </button>
          ) : (
            <button
              type="button"
              onClick={saveReflection}
              disabled={pending || !input.trim()}
              className="rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60"
            >
              {pending ? "Guardando…" : "Guardar nota de reflexión"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
