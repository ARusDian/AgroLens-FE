import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'No prompt provided' },
        { status: 400 }
      );
    }

    const response = await fetch('http://172.28.42.56:8000/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    // Ambil hanya bagian setelah "Jawaban:"
    const rawAnswer = result.answer || ''; // asumsi backend mengembalikan { answer: "..." }
    const filteredAnswer = rawAnswer.includes('Jawaban:')
      ? rawAnswer.split('Jawaban:')[1].trim()
      : rawAnswer;

    return NextResponse.json({ answer: filteredAnswer });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Error processing your chat request' },
      { status: 500 }
    );
  }
}
