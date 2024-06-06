import { ReactNode } from "react";
import { CodeDisplayExplorerFile } from "@codebymedu/components/codeDisplay/components/codeDisplayExplorerFile";
import { Accordion, AccordionItem, Card } from "@nextui-org/react";

type CodeDisplayExplorerProps = { children: ReactNode };

export const CodeDisplayExplorer = ({ children }: CodeDisplayExplorerProps) => {
  return (
    <Card>
      <Accordion>
        <AccordionItem aria-label="PORTFOLIO" title="PORTFOLIO">
          {children}
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

CodeDisplayExplorer.displayName = "CodeDisplayExplorer";

CodeDisplayExplorer.File = CodeDisplayExplorerFile;

CodeDisplayExplorer.File.displayName = "CodeDisplayExplorerFile";
