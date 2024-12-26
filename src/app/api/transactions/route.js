import { readFileSync } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'transactions.json');
    const data = readFileSync(filePath, 'utf-8');
    return new Response(data, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to load transactions data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}