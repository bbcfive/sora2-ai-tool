const getEnv = (key: string) => process.env[key];

export const env = {
  openaiKey: getEnv('OPENAI_API_KEY'),
  anthropicKey: getEnv('ANTHROPIC_API_KEY'),
  assemblyAiKey: getEnv('ASSEMBLYAI_API_KEY'),
  whisperModel: getEnv('WHISPER_MODEL') ?? 'whisper-1',
  stripeSecretKey: getEnv('STRIPE_SECRET_KEY'),
  stripePriceId: getEnv('STRIPE_PRICE_ID'),
  publicSiteUrl: getEnv('NEXT_PUBLIC_SITE_URL')
};

export const requireEnv = (key: keyof typeof env) => {
  const value = env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key.toUpperCase()}`);
  }
  return value;
};
