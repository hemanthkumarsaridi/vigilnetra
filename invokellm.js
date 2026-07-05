import { base44 } from '@/api/base44Client';

// AI-powered scam analysis using Base44 InvokeLLM integration
export async function analyzeContent(content, type) {
  const prompt = `You are Vigil Netra, an AI scam detection assistant.
Analyze the following ${type} content for potential scams, fraud, or malicious intent.

Content to analyze:
${content}

Provide risk level, detailed analysis, and recommended actions.`;

  const result = await base44.integrations.Core.InvokeLLM({
    prompt,
    response_json_schema: {
      type: 'object',
      properties: {
        risk_level: { type: 'string', enum: ['safe', 'low', 'medium', 'high', 'critical'] },
        category: { type: 'string', enum: ['normal', 'educational', 'nature', 'scam', 'phishing', 'spam', 'suspicious', 'safe'] },
        title: { type: 'string' },
        analysis: { type: 'string' },
        friendly_message: { type: 'string' },
        content_description: { type: 'string' },
        is_scam: { type: 'boolean' },
        confidence: { type: 'number' },
        cautions: { type: 'array', items: { type: 'string' } },
        actions: { type: 'array', items: { type: 'string' } },
        positive_points: { type: 'array', items: { type: 'string' } }
      }
    }
  });
  return result;
}
