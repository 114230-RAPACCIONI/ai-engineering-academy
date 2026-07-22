import type { LLMProvider } from "./ports/LLMProvider";
import { AnthropicProvider } from "./adapters/AnthropicProvider";

export function getLLMProvider(): LLMProvider {
  const provider = process.env.AI_DEFAULT_PROVIDER ?? "anthropic";

  if (provider === "anthropic") {
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error(
        "Falta ANTHROPIC_API_KEY. Configurala en .env para usar el Mentor.",
      );
    }
    return new AnthropicProvider();
  }

  throw new Error(
    `Proveedor no implementado aún: ${provider}. Usá AI_DEFAULT_PROVIDER=anthropic.`,
  );
}
