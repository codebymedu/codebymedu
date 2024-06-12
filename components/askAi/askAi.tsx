import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { AskAiEmptyState } from "@codebymedu/components/askAi/components/askAiEmptyState";
import { AskAiMessage } from "@codebymedu/components/askAi/components/askAiMessage";
import { AskAiQuestionInput } from "@codebymedu/components/askAi/components/askAiQuestionInput";
import { useMessages } from "@codebymedu/components/askAi/utils/useMessages";
import { askAi } from "@codebymedu/components/askAi/utils/askAiHelpers";
import { AskAiMessageLoading } from "@codebymedu/components/askAi/components/askAiMessageLoading";

export const AskAi = () => {
  const chatEndRef = useRef<HTMLDivElement>(null);

  // --- STATE= --

  const { addMessage, messages } = useMessages();

  // --- CALLBACKS ---

  const handleAskAi = async (
    _: unknown,
    formData: FormData
  ): Promise<{
    status: "success" | "unknown_error" | "limit_reached" | "no_credits" | null;
  }> => {
    const question = formData.get("question") as string;

    if (!question) {
      return { status: null };
    }

    addMessage({
      message: question,
      sentBy: "user",
    });

    const { message, status } = await askAi(question);

    if (message) {
      addMessage(message);
    }

    return { status };
  };

  // --- STATE 2 ---

  const [formState, dispatchAskAi] = useFormState(handleAskAi, {
    status: null,
  });

  // --- EFFECTS ---

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // --- RENDER ---

  return (
    <form
      action={dispatchAskAi}
      className="overflow-hidden h-64 flex flex-col justify-between outline-none"
    >
      {messages.length > 0 ? (
        <div className="w-full flex  my-2 h-full overflow-y-scroll flex-col	relative">
          {messages.map((message, index) => (
            <AskAiMessage
              key={index}
              message={message.message}
              sentBy={message.sentBy}
            />
          ))}

          <div ref={chatEndRef} />
        </div>
      ) : (
        <AskAiEmptyState />
      )}

      <div className="flex flex-col w-full flex-wrap md:flex-nowrap mt-auto relative">
        <AskAiMessageLoading />

        <AskAiQuestionInput status={formState.status} />
      </div>
    </form>
  );
};
