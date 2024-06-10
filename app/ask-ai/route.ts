import { askGpt } from "@codebymedu/lib/openAi/openAi";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const question = url.searchParams.get("question");

  if (!question) {
    return NextResponse.error();
  }

  const answer = await askGpt(question);

  if (answer.status !== "success") {
    return NextResponse.json({ status: answer.status });
  }

  return NextResponse.json({ status: "success", answer });
}
