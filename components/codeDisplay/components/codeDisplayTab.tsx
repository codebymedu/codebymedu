"use client";

import { ReactNode } from "react";
import { Tab, Tabs } from "@nextui-org/react";
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
  CodeBracketIcon,
} from "@heroicons/react/20/solid";

type CodeDisplayTabProps = {};

// TODO: Make these tabs a prop.
export const CodeDisplayTab = ({}: CodeDisplayTabProps) => {
  return (
    <Tabs aria-label="Options" color="secondary" variant="bordered">
      <Tab
        key="aboutMe"
        title={
          <div className="flex items-center space-x-2">
            <UserIcon width={18} />

            <span>aboutMe.tsx</span>
          </div>
        }
      />

      <Tab
        key="skills"
        title={
          <div className="flex items-center space-x-2">
            <CodeBracketIcon width={18} />

            <span>skills.tsx</span>
          </div>
        }
      />

      <Tab
        key="askAi"
        title={
          <div className="flex items-center space-x-2">
            <ChatBubbleLeftIcon width={18} />

            <span>askAI.tsx</span>
          </div>
        }
      />

      <Tab
        key="contact"
        title={
          <div className="flex items-center space-x-2">
            <EnvelopeIcon width={18} />

            <span>contact.tsx</span>
          </div>
        }
      />
    </Tabs>
  );
};
