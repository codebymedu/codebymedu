import { UserIcon } from "@heroicons/react/20/solid";

export const AskAiEmptyState = () => (
  <div className="w-full flex flex-col h-28 items-center justify-center my-8">
    <UserIcon width={90} className="mb-4" />

    <p className="text-gray-400">
      Start by asking something you want to know about me :)
    </p>

    <p className="text-xs text-gray-300">
      Because of costs, there is a limit of 10 questions in this chat.
    </p>
  </div>
);
