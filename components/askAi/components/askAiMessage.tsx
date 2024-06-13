import { Card, CardBody } from "@nextui-org/react";
import clsx from "clsx";

type AskAiMessageProps = {
  message: string;
  sentBy: "user" | "system";
};

export const AskAiMessage = ({ message, sentBy }: AskAiMessageProps) => (
  <div
    className={clsx(
      "w-full mb-2 px-2",
      sentBy === "user" ? "text-right" : "text-left"
    )}
  >
    {sentBy === "user" ? (
      <Card className="md:w-96 ml-auto text-wrap shadow-none bg-neutral-100 dark:bg-neutral-700">
        <CardBody>You: {message}</CardBody>
      </Card>
    ) : (
      <Card className="md:w-96  text-wrap shadow-none bg-neutral-200 dark:bg-neutral-800">
        <CardBody>AI: {message}</CardBody>
      </Card>
    )}
  </div>
);
