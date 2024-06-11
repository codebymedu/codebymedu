import { askGpt } from "@codebymedu/lib/openAi/openAi";
import { NextResponse } from "next/server";

/**
 * This logic is used to stop asking AI if there are more than 10 questions.
 */
const requestCounts: Record<string, number> = {};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const question = url.searchParams.get("question");

  const userIp = request.headers.get("x-forwarded-for");

  if (!question) {
    return NextResponse.error();
  }

  if (!userIp) {
    return NextResponse.json({ status: "missing_ip_address" });
  }

  if (!requestCounts[userIp]) {
    requestCounts[userIp] = 0;
  }

  console.log("ey wtf1 ", requestCounts);
  if (requestCounts[userIp] >= 10) {
    console.log("ey wtf");
    return NextResponse.json({
      status: "limit_reached",
    });
  }

  requestCounts[userIp] += 1;

  // const answer = await askGpt(question);

  // if (answer.status !== "success") {
  //   return NextResponse.json({ status: answer.status });
  // }

  // return NextResponse.json({ status: "success", answer });
  return NextResponse.json({ status: "success" });
}
