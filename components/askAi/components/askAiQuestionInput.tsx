import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Input } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

type AskAiQuestionInputProps = {
  status: "success" | "unknown_error" | "limit_reached" | "no_credits" | null;
};

export const AskAiQuestionInput = ({ status }: AskAiQuestionInputProps) => {
  // --- STATE ---

  const { pending } = useFormStatus();

  // --- RENDER ---

  return (
    <Input
      type="text"
      placeholder="Enter your question"
      variant="flat"
      name="question"
      endContent={<ArrowRightIcon width={18} />}
      disabled={
        status === "limit_reached" || pending || status === "no_credits"
      }
      className="focus:outline-none"
    />
  );
};
