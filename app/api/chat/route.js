import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { messages } = await req.json();
  const initialPrompt = { role: 'system', content: `You are a helpful medical assistant. You answer any health related questions asked or seeked for.` };
  const messagesWithPrompt = [initialPrompt, ...messages];
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: messagesWithPrompt,
    stream: true,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}