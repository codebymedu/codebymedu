import OpenAI from "openai";
import { createPrompt } from "@codebymedu/lib/openAi/prompt";

export const createOpenAi = () =>
  new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

export const askGpt = async (question: string) =>
  await createOpenAi().chat.completions.create({
    messages: [{ role: "user", content: createPrompt(question) }],
    model: "gpt-3.5-turbo",
  });
