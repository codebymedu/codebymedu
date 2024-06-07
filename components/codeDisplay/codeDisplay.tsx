import { ReactNode } from "react";
import { CodeDisplayTab } from "@codebymedu/components/codeDisplay/components/codeDisplayTab";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

type CodeDisplayProps = { children: ReactNode };

const CodeDisplay = ({ children }: CodeDisplayProps) => {
  // --- HELPERS ---

  const lineNumbers = Array.from({ length: 6 }, (_, index) => index + 1);

  // --- RENDER ---

  return (
    <Card className="w-full py-4 shadow-[0px_-8px_3000px_0px_#b249f8] ">
      <CardBody className="items-center">{children}</CardBody>

      <CardBody className="flex flex-row">
        <div className="w-8 mr-4 flex flex-col items-end  ">
          {lineNumbers.map((lineNumber) => (
            <span key={lineNumber} className="pb-1">
              {lineNumber}
            </span> // Display each line number
          ))}
        </div>

        <div className="flex-1">
          <TagDisplay tag="AboutMe">
            <TagDisplay tag="Name">Meduard Krasniqi (Medu)</TagDisplay>

            <TagDisplay tag="Focus">Frontend Development</TagDisplay>

            <TagDisplay tag="Skills">
              Making web apps simple and dynamic
            </TagDisplay>

            <TagDisplay tag="Experience">Frontend Technical Lead</TagDisplay>
          </TagDisplay>
        </div>
      </CardBody>
    </Card>
  );
};

export { CodeDisplay, CodeDisplayTab };

type TagDisplayProps = { children: ReactNode; tag: string };

const TagDisplay = ({ children, tag }: TagDisplayProps) => (
  <div className="pl-4 pb-[5px]">
    <span className="text-violet-500">{`<${tag}>`}</span>

    <span>{children}</span>

    <span className="text-violet-500">{`</${tag}>`}</span>
  </div>
);
