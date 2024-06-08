import { Input } from "@nextui-org/react";
import { ArrowRightIcon, UserIcon } from "@heroicons/react/16/solid";

export const AskAi = () => {
  // --- RENDER ---

  return (
    <div>
      <div className="w-full flex flex-col items-center my-8">
        <UserIcon width={90} className="mb-4" />

        <p className="text-gray-400">
          Start by asking something you want to know about me :)
        </p>
      </div>

      <div className="flex w-full flex-wrap md:flex-nowrap -mb-4">
        <Input
          type="text"
          placeholder="Enter your question"
          variant="flat"
          endContent={<ArrowRightIcon width={18} />}
        />
      </div>
    </div>
  );
};
