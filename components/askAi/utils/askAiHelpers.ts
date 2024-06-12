export const askAi = async (
  question: string
): Promise<{
  status: "success" | "unknown_error" | "limit_reached" | "no_credits" | null;
  message?: {
    message: string;
    sentBy: "system";
  };
}> => {
  const response = await fetch(`/ask-ai?question=${question}`);
  const responseBody = await response.json();

  if (responseBody.status === "no_credits") {
    return { status: "no_credits" };
  }

  if (responseBody.status === "success") {
    return {
      status: "success",
      message: {
        message: responseBody.answer.results.choices[0].message.content,
        sentBy: "system",
      },
    };
  }

  if (responseBody.status === "limit_reached") {
    return {
      status: "limit_reached",
      message: {
        message: "Limit of 10 messages has been reached. ",
        sentBy: "system",
      },
    };
  }

  return { status: "unknown_error" };
};
