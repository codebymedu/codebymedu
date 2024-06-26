import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Input } from "@nextui-org/react";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

type AskAiQuestionInputProps = {
  status: "success" | "unknown_error" | "limit_reached" | "no_credits" | null;
};

export const AskAiQuestionInput = ({ status }: AskAiQuestionInputProps) => {
  // --- STATE ---

  const { pending } = useFormStatus();

  const [value, setValue] = useState("");

  // --- EFFECTS ---

  useEffect(() => {
    if (pending) {
      setValue("");
    }
  }, [pending, setValue]);

  // --- RENDER ---

  return (
    <Input
      type="text"
      placeholder="Enter your question"
      variant="flat"
      name="question"
      endContent={<ArrowRightIcon width={18} />}
      errorMessage={
        status === "unknown_error" &&
        "There has been an unknown error! Please try again later."
      }
      disabled={
        status === "limit_reached" || pending || status === "no_credits"
      }
      className={clsx(
        "focus:outline-none",
        status === "unknown_error" ? "border-1 border-red-500" : ""
      )}
      value={value}
      onValueChange={setValue}
    />
  );
};
