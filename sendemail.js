import { base44 } from '@/api/base44Client';

// Send email alerts for detected scams
export async function sendScamAlert(to, scamDetails) {
  await base44.integrations.Core.SendEmail({
    to: to,
    subject: 'Vigil Netra - Scam Alert Detected!',
    body: `
      <h2>⚠️ Scam Alert</h2>
      <p><strong>Risk Level:</strong> ${scamDetails.risk_level}</p>
      <p><strong>Analysis:</strong> ${scamDetails.analysis}</p>
      <h3>Recommended Actions:</h3>
      <ul>
        ${scamDetails.actions.map(a => '<li>' + a + '</li>').join('')}
      </ul>
      <p>Stay safe! - Vigil Netra Team</p>
    `
  });
}
