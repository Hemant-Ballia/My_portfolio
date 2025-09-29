import { NextResponse } from 'next/server';
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const folderPath = join(process.cwd(), 'data');
const filePath = join(folderPath, 'liveFeedback.json');

function safeReadJSON(path: string) {
  try {
    if (!existsSync(path)) return [];
    const raw = readFileSync(path, 'utf-8');
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Error reading JSON file:', err);
    return [];
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Ensure folder and file exist
    if (!existsSync(folderPath)) mkdirSync(folderPath);
    if (!existsSync(filePath)) writeFileSync(filePath, '[]');

    const existing = safeReadJSON(filePath);
    existing.push({ ...body, id: Date.now() });
    writeFileSync(filePath, JSON.stringify(existing, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('POST error:', err);
    return NextResponse.json({ success: false, error: 'Failed to save feedback' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const data = safeReadJSON(filePath);
    return NextResponse.json(data);
  } catch (err) {
    console.error('GET error:', err);
    return NextResponse.json([], { status: 500 });
  }
}
