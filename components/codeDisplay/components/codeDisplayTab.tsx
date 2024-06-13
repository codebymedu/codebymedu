"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Menu,
  MenuItem,
  Tab,
  Tabs,
} from "@nextui-org/react";
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
  CodeBracketIcon,
  FireIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { Key, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const CodeDisplayTab = () => {
  // --- STATE ---

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [selected, setSelected] = useState(
    searchParams.get("tab") || "aboutMe"
  );

  // --- CALLBACKS ---

  const handleTabChange = (tabKey: Key) => {
    setSelected(tabKey as string);

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("tab");
    newSearchParams.set("tab", tabKey as string);

    router.replace(`${pathname}?${newSearchParams.toString()}`);
  };

  // --- HELPERS ---

  const tabs = [
    { key: "aboutMe", label: "aboutMe.tsx", icon: <UserIcon width={18} /> },
    {
      key: "skills",
      label: "skills.tsx",
      icon: <CodeBracketIcon width={18} />,
    },
    {
      key: "askAi",
      label: "askAI.tsx",
      icon: <ChatBubbleLeftIcon width={18} />,
      extra: <FireIcon width={18} className="text-warning animate-pulse" />,
    },
    { key: "contact", label: "contact.tsx", icon: <EnvelopeIcon width={18} /> },
  ];

  // --- RENDER ---

  return (
    <div>
      <div className="block md:hidden ">
        <Dropdown>
          <DropdownTrigger>
            <Button className="flex items-center space-x-2  p-2 rounded-md w-full">
              {tabs.find((tab) => tab.key === selected)?.icon}

              {tabs.find((tab) => tab.key === selected)?.label}

              <ChevronDownIcon width={18} />
            </Button>
          </DropdownTrigger>

          <DropdownMenu aria-label="Tabs">
            {tabs.map((tab) => (
              <DropdownItem
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className="p-2 flex  items-center  space-x-2"
              >
                <div className="flex flex-row gap-5">
                  {tab.icon}

                  {tab.label}
                </div>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="hidden md:block">
        <Tabs
          aria-label="Options"
          color="secondary"
          variant="bordered"
          selectedKey={selected}
          onSelectionChange={handleTabChange}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.key}
              title={
                <div className="flex items-center space-x-2">
                  {tab.icon}
                  <span>{tab.label}</span>
                  {tab.extra}
                </div>
              }
              className="w-full"
            />
          ))}
        </Tabs>
      </div>
    </div>
  );
};
