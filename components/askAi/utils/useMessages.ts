import { useState } from "react";

export const useMessages = (): {
  addMessage: (message: Message) => void;
  messages: Message[];
} => {
  // --- STATE ---

  const [messages, setMessages] = useState<
    {
      message: string;
      sentBy: "user" | "system";
    }[]
  >([]);

  // --- CALLBACKS ---

  const handleAddMessage = (message: Message) => {
    setMessages((latestMessages) => [...latestMessages, message]);
  };

  // --- RETURN ---

  return {
    addMessage: handleAddMessage,
    messages: messages,
  };
};

type Message = { message: string; sentBy: "user" | "system" };
