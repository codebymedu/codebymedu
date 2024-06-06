import { ReactNode } from "react";
import { CodeDisplayExplorer } from "@codebymedu/components/codeDisplay/components/codeDisplayExplorer";

type CodeDisplayProps = { children: ReactNode };

export const CodeDisplay = ({ children }: CodeDisplayProps) => {
  // --- RENDER ---

  return <>{children}</>;
};

CodeDisplay.Explorer = CodeDisplayExplorer;

type CodeDisplayExplorerFileProps = {
  children: ReactNode;
};

const CodeDisplayExplorerFile = ({
  children,
}: CodeDisplayExplorerFileProps) => {
  return <>File {children}</>;
};

CodeDisplayExplorer.File = CodeDisplayExplorerFile;
