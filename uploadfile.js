import { base44 } from '@/api/base44Client';

// File upload using Base44 UploadFile integration
export async function uploadFile(file) {
  const { file_url } = await base44.integrations.Core.UploadFile({
    file: file
  });
  return file_url;
}

// For image analysis — pass file_url to InvokeLLM with file_urls parameter
export async function analyzeImage(imageUrl) {
  const result = await base44.integrations.Core.InvokeLLM({
    prompt: 'Analyze this image for scam content, nature scenes, or educational material',
    file_urls: [imageUrl],
    response_json_schema: {
      type: 'object',
      properties: {
        type: { type: 'string' },
        description: { type: 'string' },
        risk_level: { type: 'string' }
      }
    }
  });
  return result;
}
