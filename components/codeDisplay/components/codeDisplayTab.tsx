"use client";

import { Link, Tab, Tabs } from "@nextui-org/react";
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
  CodeBracketIcon,
  FireIcon,
} from "@heroicons/react/20/solid";
import { TagDisplay } from "@codebymedu/components/tagDisplay";
import { CodeDisplayCodeContent } from "@codebymedu/components/codeDisplay/components/codeDisplayCodeContent";
import { AskAi } from "@codebymedu/components/askAi/askAi";
import { CodeDisplayAboutMeTab } from "@codebymedu/components/codeDisplay/components/codeDisplayAboutMeTab";

type CodeDisplayTabProps = {};

// TODO: Make these tabs a prop.
export const CodeDisplayTab = ({}: CodeDisplayTabProps) => (
  <Tabs aria-label="Options" color="secondary" variant="bordered">
    <Tab
      key="aboutMe"
      title={
        <div className="flex items-center space-x-2">
          <UserIcon width={18} />

          <span>aboutMe.tsx</span>
        </div>
      }
      className="w-full pb-0"
    >
      <CodeDisplayAboutMeTab />
    </Tab>

    <Tab
      key="skills"
      title={
        <div className="flex items-center space-x-2">
          <CodeBracketIcon width={18} />

          <span>skills.tsx</span>
        </div>
      }
      className="w-full pb-0"
    >
      <CodeDisplayCodeContent className="h-64">
        <TagDisplay tag="Skills">
          <TagDisplay tag="Technologies">
            Next.js, React, Typescript, etc.
          </TagDisplay>

          <TagDisplay tag="DevPractices">
            Code Reviews, Agile Methodologies, Continuous Integration, etc.
          </TagDisplay>

          <TagDisplay tag="Product">
            From idea to deployment, User-focused design, etc.
          </TagDisplay>

          <TagDisplay tag="SoftSkills">
            Communication, Teamwork, etc.
          </TagDisplay>
        </TagDisplay>
      </CodeDisplayCodeContent>
    </Tab>

    <Tab
      key="askAi"
      title={
        <div className="flex items-center space-x-2">
          <ChatBubbleLeftIcon width={18} />

          <span>askAI.tsx</span>

          <FireIcon width={18} className="text-warning animate-pulse" />
        </div>
      }
      className="w-full pb-0 "
    >
      <AskAi />
    </Tab>

    <Tab
      key="contact"
      title={
        <div className="flex items-center space-x-2">
          <EnvelopeIcon width={18} />

          <span>contact.tsx</span>
        </div>
      }
      className="w-full pb-0"
    >
      <CodeDisplayCodeContent className="h-64">
        <TagDisplay tag="AboutMe">
          <TagDisplay tag="Email">
            <Link
              href="mailto:contact@codebymedu.com"
              className="dark:text-white text-black"
            >
              contact@codebymedu.com
            </Link>
          </TagDisplay>

          <TagDisplay tag="GitHub">
            <Link
              target="_blank"
              href="https://github.com/codebymedu/"
              className="dark:text-white text-black"
            >
              github.com/codebymedu
            </Link>
          </TagDisplay>

          <TagDisplay tag="Linkedin">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/codebymedu/"
              className="dark:text-white text-black"
            >
              linkedin.com/in/codebymedu
            </Link>
          </TagDisplay>
        </TagDisplay>
      </CodeDisplayCodeContent>
    </Tab>
  </Tabs>
);
