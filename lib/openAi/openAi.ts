import OpenAI from "openai";
import "server-only";

export const createOpenAi = () =>
  new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

export const askGpt = async (question: string) => {
  try {
    const prompt = (process.env.ASK_AI_PROMPT || "")
      .replaceAll("\n", "")
      .replace("{question}", question);

    return {
      results: await createOpenAi().chat.completions.create({
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        model: "gpt-4o",
      }),
      status: "success",
    };
  } catch (error) {
    const typedError = error as { code: string };
    console.log({ typedError });

    if ((typedError?.code || "") === "insufficient_quota") {
      return { status: "insufficient_quota" };
    }

    return { status: "unknown_error" };
  }
};
