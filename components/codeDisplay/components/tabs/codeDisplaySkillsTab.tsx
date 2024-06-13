import { TagDisplay } from "@codebymedu/components/tagDisplay";
import { CodeDisplayCodeContent } from "@codebymedu/components/codeDisplay/components/codeDisplayCodeContent";

export const CodeDisplaySkillsTab = () => (
  <CodeDisplayCodeContent className="h-64 w-full pt-4">
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

      <TagDisplay tag="SoftSkills">Communication, Teamwork, etc.</TagDisplay>
    </TagDisplay>
  </CodeDisplayCodeContent>
);
