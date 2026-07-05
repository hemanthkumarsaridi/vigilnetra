import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion, appBaseUrl } = appParams;

// Create a client with authentication required
export const base44 = createClient({
  appId,
  token,
  functionsVersion,
  serverUrl: '',
  requiresAuth: false,
  appBaseUrl
});

// Usage:
// base44.entities.AnalysisHistory.list()
// base44.entities.AnalysisHistory.create({...})
// base44.integrations.Core.InvokeLLM({...})
// base44.integrations.Core.UploadFile({...})
// base44.integrations.Core.GenerateSpeech({...})