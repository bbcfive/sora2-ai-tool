import { requireEnv } from './env';

export type SummarizeProvider = 'openai' | 'claude';

export type SummarizePayload = {
  prompt: string;
  provider: SummarizeProvider;
};

export type SummarizeResult = {
  provider: SummarizeProvider;
  output: string;
};

export async function summarizePrompt({ prompt, provider }: SummarizePayload): Promise<SummarizeResult> {
  if (!prompt) {
    throw new Error('Prompt is required');
  }

  if (provider === 'openai') {
    requireEnv('openaiKey');
    return {
      provider,
      output: `[stub][OpenAI] Suggested concise prompt for: ${prompt.slice(0, 42)}...`
    };
  }

  if (provider === 'claude') {
    requireEnv('anthropicKey');
    return {
      provider,
      output: `[stub][Claude] Structured summary for: ${prompt.slice(0, 42)}...`
    };
  }

  throw new Error(`Unsupported provider: ${provider}`);
}
