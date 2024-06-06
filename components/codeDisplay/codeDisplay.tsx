import { ReactNode } from "react";
import { CodeDisplayTab } from "@codebymedu/components/codeDisplay/components/codeDisplayTab";
import { Card, CardBody } from "@nextui-org/react";

type CodeDisplayProps = { children: ReactNode };

const CodeDisplay = ({ children }: CodeDisplayProps) => {
  // --- RENDER ---

  return (
    <Card className="w-full py-4 shadow-[0px_-8px_3000px_0px_#b249f8] ">
      <CardBody className=" items-center">{children}</CardBody>

      <CardBody className="px-16">
        <TagDisplay tag="about-me">
          <TagDisplay tag="name">Meduard Krasniqi (Medu)</TagDisplay>

          <TagDisplay tag="focus">Frontend Development</TagDisplay>

          <TagDisplay tag="skills">
            Building intuitive and dynamic web applications
          </TagDisplay>

          <TagDisplay tag="experience">Frontend Technical Lead</TagDisplay>
        </TagDisplay>
      </CardBody>
    </Card>
  );
};

export { CodeDisplay, CodeDisplayTab };

type TagDisplayProps = { children: ReactNode; tag: string };

const TagDisplay = ({ children, tag }: TagDisplayProps) => (
  <div className="pl-4 my-2">
    <p className="text-violet-500">{`<${tag}>`}</p>

    <div className="pl-4">{children}</div>

    <p className="text-violet-500">{`</${tag}>`}</p>
  </div>
);
