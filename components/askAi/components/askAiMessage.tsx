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
      <Card className="w-96 ml-auto text-wrap">
        <CardBody>{message}</CardBody>
      </Card>
    ) : (
      <p className="w-96 text-wrap">{message}</p>
    )}
  </div>
);
