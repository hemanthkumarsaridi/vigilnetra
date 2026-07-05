import { base44 } from '@/api/base44Client';

// Generate images using AI (takes 5-10 seconds)
export async function generateContextImage(prompt) {
  const { url } = await base44.integrations.Core.GenerateImage({
    prompt: prompt
  });
  return url;
}

// Example: Generate a warning icon for high-risk scams
export async function generateWarningImage(riskLevel) {
  return await generateContextImage(
    `A warning icon for ${riskLevel} risk scam detection, cybersecurity theme, digital art`
  );
}
