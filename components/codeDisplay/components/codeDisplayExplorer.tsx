import { ReactNode } from "react";
import { CodeDisplayExplorerFile } from "@codebymedu/components/codeDisplay/components/codeDisplayExplorerFile";
import { Accordion, AccordionItem, Card } from "@nextui-org/react";

type CodeDisplayExplorerProps = { children: ReactNode };

export const CodeDisplayExplorer = ({ children }: CodeDisplayExplorerProps) => {
  return (
    <Card>
      PORTFOLIO
      {children}
    </Card>
  );
};

CodeDisplayExplorer.displayName = "CodeDisplayExplorer";

CodeDisplayExplorer.File = CodeDisplayExplorerFile;

CodeDisplayExplorer.File.displayName = "CodeDisplayExplorerFile";
