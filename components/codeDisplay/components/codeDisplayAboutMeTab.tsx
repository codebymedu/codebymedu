import { TagDisplay } from "@codebymedu/components/tagDisplay";
import { CodeDisplayCodeContent } from "@codebymedu/components/codeDisplay/components/codeDisplayCodeContent";

export const CodeDisplayAboutMeTab = () => (
  <CodeDisplayCodeContent>
    <TagDisplay tag="AboutMe">
      <TagDisplay tag="Name">Meduard Krasniqi (Medu)</TagDisplay>

      <TagDisplay tag="Focus">Frontend Development</TagDisplay>

      <TagDisplay tag="Skills">Making web apps simple and dynamic</TagDisplay>

      <TagDisplay tag="Experience">Frontend Technical Lead</TagDisplay>

      <TagDisplay tag="Philosophy">
        Don&lsquo;t think I&lsquo;m just about code—I&lsquo;m about creating
        awesome experiences.
      </TagDisplay>
    </TagDisplay>
  </CodeDisplayCodeContent>
);
