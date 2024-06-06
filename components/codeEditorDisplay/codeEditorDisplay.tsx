import { ReactNode } from "react";

type CodeEditorDisplayProps = { children: ReactNode };

export const CodeEditorDisplay = ({ children }: CodeEditorDisplayProps) => {
  // --- RENDER ---

  return <>{children}</>;
};

const CodeEditorDisplayExplorer = () => {
  return <>Folder structure</>;
};

CodeEditorDisplay.Explorer = CodeEditorDisplayExplorer;

CodeEditorDisplayExplorer.File = () => {
  return <>File</>;
};
