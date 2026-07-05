import { base44 } from '@/api/base44Client';

// Extract data from uploaded files (PDF, Excel, CSV, JSON, HTML, images)
export async function extractFromFile(fileUrl, schema) {
  const result = await base44.integrations.Core.ExtractDataFromUploadedFile({
    file_url: fileUrl,
    json_schema: schema
  });
  return result;
}

// Example: Extract structured data from a scam document
export async function extractScamData(fileUrl) {
  return await extractFromFile(fileUrl, {
    type: 'object',
    properties: {
      sender: { type: 'string' },
      recipient: { type: 'string' },
      date: { type: 'string' },
      content: { type: 'string' },
      suspicious_links: { type: 'array', items: { type: 'string' } },
      phone_numbers: { type: 'array', items: { type: 'string' } },
      email_addresses: { type: 'array', items: { type: 'string' } }
    }
  });
}
