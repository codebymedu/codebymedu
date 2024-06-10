import { askGpt } from "@codebymedu/lib/openAi/openAi";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const question = url.searchParams.get("question");

  if (!question) {
    return Response.error();
  }

  const answer = await askGpt(question);

  if (answer.status !== "success") {
    return Response.json({ status: answer.status });
  }

  return Response.json({ status: "success", answer });
}
