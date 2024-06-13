import { TagDisplay } from "@codebymedu/components/tagDisplay";
import { CodeDisplayCodeContent } from "@codebymedu/components/codeDisplay/components/codeDisplayCodeContent";
import Link from "next/link";

export const CodeDisplayContactTab = () => (
  <CodeDisplayCodeContent className="h-64 w-full pt-4">
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
);
