import { base44 } from '@/api/base44Client';

// Generate speech audio for the thank you page
export async function generateThankYouSpeech() {
  const { url } = await base44.integrations.Core.GenerateSpeech({
    text: 'Thank you for using Vigil Netra! Stay alert and safe. Always visit us before falling for fraud. Remember, your safety is our priority. Stay vigilant!',
    voice: 'storm',
    language_code: 'en'
  });
  return url;
}

// Available voices:
// river: calm, neutral
// honey: warm, soft
// sunny: bright, upbeat
// storm: formal, authoritative
// spark: energetic, quick