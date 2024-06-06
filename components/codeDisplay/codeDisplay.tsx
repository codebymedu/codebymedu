import { ReactNode } from "react";
import { CodeDisplayExplorer } from "@codebymedu/components/codeDisplay/components/codeDisplayExplorer";
import { Card, CardBody } from "@nextui-org/react";

type CodeDisplayProps = { children: ReactNode };

export const CodeDisplay = ({ children }: CodeDisplayProps) => {
  // --- RENDER ---

  return (
    <Card>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

CodeDisplay.Explorer = CodeDisplayExplorer;
