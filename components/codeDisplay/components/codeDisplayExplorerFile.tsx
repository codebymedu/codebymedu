import { ReactNode } from "react";

type CodeDisplayExplorerFileProps = {
  children: ReactNode;
};

export const CodeDisplayExplorerFile = ({
  children,
}: CodeDisplayExplorerFileProps) => {
  return <>File {children}</>;
};

CodeDisplayExplorerFile.displayName = "CodeDisplayExplorerFile";
