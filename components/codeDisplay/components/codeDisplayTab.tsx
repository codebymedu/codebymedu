"use client";

import { Tab, Tabs } from "@nextui-org/react";
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
  CodeBracketIcon,
  FireIcon,
} from "@heroicons/react/20/solid";
import { Key, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const CodeDisplayTab = () => {
  // --- STATE ---

  const [selected, setSelected] = useState("aboutMe");

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // --- CALLBACKS ---

  const handleTabChange = (tabKey: Key) => {
    setSelected(tabKey as string);

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("tab");
    newSearchParams.set("tab", tabKey as string);

    router.replace(`${pathname}?${newSearchParams.toString()}`);
  };

  // --- RENDER ---

  return (
    <Tabs
      aria-label="Options"
      color="secondary"
      variant="bordered"
      selectedKey={selected}
      onSelectionChange={handleTabChange}
    >
      <Tab
        key="aboutMe"
        title={
          <div className="flex items-center space-x-2">
            <UserIcon width={18} />

            <span>aboutMe.tsx</span>
          </div>
        }
        className="w-full"
      />

      <Tab
        key="skills"
        title={
          <div className="flex items-center space-x-2">
            <CodeBracketIcon width={18} />

            <span>skills.tsx</span>
          </div>
        }
        className="w-full"
      />

      <Tab
        key="askAi"
        title={
          <div className="flex items-center space-x-2">
            <ChatBubbleLeftIcon width={18} />

            <span>askAI.tsx</span>

            <FireIcon width={18} className="text-warning animate-pulse" />
          </div>
        }
        className="w-full"
      />

      <Tab
        key="contact"
        title={
          <div className="flex items-center space-x-2">
            <EnvelopeIcon width={18} />

            <span>contact.tsx</span>
          </div>
        }
        className="w-full"
      />
    </Tabs>
  );
};
