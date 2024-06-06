import { ReactNode } from "react";
import { CodeDisplayExplorer } from "@codebymedu/components/codeDisplay/components/codeDisplayExplorer";
import { Card, CardBody } from "@nextui-org/react";

type CodeDisplayProps = { children: ReactNode };

export const CodeDisplay = ({ children }: CodeDisplayProps) => {
  // --- RENDER ---

  return (
    <Card className="w-full shadow-[0px_-8px_1000px_0px_#b249f8] grid grid-cols-12">
      <CardBody className="col-span-3">{children}</CardBody>

      <CardBody className="col-span-9">asd</CardBody>
    </Card>
  );
};

CodeDisplay.Explorer = CodeDisplayExplorer;

CodeDisplay.Explorer.displayName = "CodeDisplayExplorer";
