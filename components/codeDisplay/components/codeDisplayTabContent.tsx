"use client";

import { useSearchParams } from "next/navigation";
import { CodeDisplayAboutMeTab } from "@codebymedu/components/codeDisplay/components/tabs/codeDisplayAboutMeTab";
import { CodeDisplaySkillsTab } from "@codebymedu/components/codeDisplay/components/tabs/codeDisplaySkillsTab";
import { CodeDisplayContactTab } from "@codebymedu/components/codeDisplay/components/tabs/codeDisplayContactTab";
import { ReactNode } from "react";
import { AskAi } from "@codebymedu/components/askAi/askAi";

export const CodeDisplayTabContent = () => {
  // --- STATE ---

  const searchParams = useSearchParams();

  const activeTab = (searchParams.get("tab") as string) || "aboutMe";

  // --- HELPERS ---

  const tabs: Record<string, ReactNode> = {
    aboutMe: <CodeDisplayAboutMeTab />,
    skills: <CodeDisplaySkillsTab />,
    askAi: <AskAi />,
    contact: <CodeDisplayContactTab />,
  };

  // --- RENDER ---

  return <>{tabs[activeTab]}</>;
};
