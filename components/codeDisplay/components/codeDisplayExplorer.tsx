import { ReactNode } from "react";
import { CodeDisplayExplorerFile } from "@codebymedu/components/codeDisplay/components/codeDisplayExplorerFile";

type CodeDisplayExplorerProps = { children: ReactNode };

export const CodeDisplayExplorer = ({ children }: CodeDisplayExplorerProps) => {
  return (
    <>
      Folder structure
      {children}
    </>
  );
};

CodeDisplayExplorer.displayName = "CodeDisplayExplorer";

CodeDisplayExplorer.File = CodeDisplayExplorerFile;
