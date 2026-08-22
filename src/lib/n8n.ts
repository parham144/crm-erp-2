export const N8N_WEBHOOK_URL = 'https://n8n.kadoai.online/webhook/register-order';

export async function sendToN8n(payload: Record<string, any>) {
  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`n8n webhook error with status: ${response.status}`);
    }

    return await response.json().catch(() => ({ success: true }));
  } catch (error) {
    console.error('Failed to send data to n8n:', error);
    throw error;
  }
}
