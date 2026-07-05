import { base44 } from '@/api/base44Client';

// Transcribe audio file to text using Whisper speech recognition
export async function transcribeAudio(audioUrl) {
  const transcript = await base44.integrations.Core.TranscribeAudio({
    audio_url: audioUrl
  });
  return transcript;
}

// Full flow: upload audio -> transcribe -> analyze for scams
export async function analyzeAudioMessage(file) {
  // 1. Upload the audio file
  const { file_url } = await base44.integrations.Core.UploadFile({ file });

  // 2. Transcribe to text
  const transcript = await transcribeAudio(file_url);

  // 3. Analyze the transcript for scams
  const result = await base44.integrations.Core.InvokeLLM({
    prompt: `Analyze this transcribed voice message for scams: ${transcript}`,
    response_json_schema: {
      type: 'object',
      properties: {
        risk_level: { type: 'string' },
        is_scam: { type: 'boolean' },
        analysis: { type: 'string' }
      }
    }
  });
  return result;
}
