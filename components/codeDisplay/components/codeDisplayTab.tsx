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
export const CodeDisplayTab = ({}: CodeDisplayTabProps) => {
  // --- HELPERS ---

  const lineNumbers = Array.from({ length: 10 }, (_, index) => index + 1);

  // --- RETURN ---

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
        className="w-full"
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
        className="w-full"
      >
        <CodeDisplayCodeContent>
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
        className="w-full"
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
        className="w-full"
      >
        <CodeDisplayCodeContent>
          <TagDisplay tag="AboutMe">
            <TagDisplay tag="Email">
              <Link href="mailto:contact@codebymedu.com">
                contact@codebymedu.com
              </Link>
            </TagDisplay>

            <TagDisplay tag="GitHub">
              <Link target="_blank" href="https://github.com/codebymedu/">
                github.com/codebymedu
              </Link>
            </TagDisplay>

            <TagDisplay tag="Linkedin">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/codebymedu/"
              >
                linkedin.com/in/codebymedu
              </Link>
            </TagDisplay>
          </TagDisplay>
        </CodeDisplayCodeContent>
      </Tab>
    </Tabs>
  );
};
