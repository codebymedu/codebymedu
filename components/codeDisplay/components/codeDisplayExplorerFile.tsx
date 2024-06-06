import { ReactNode } from "react";
import { Chip } from "@nextui-org/react";

type CodeDisplayExplorerFileProps = {
  children: ReactNode;
};

export const CodeDisplayExplorerFile = ({
  children,
}: CodeDisplayExplorerFileProps) => {
  return <Chip>{children}</Chip>;
};

CodeDisplayExplorerFile.displayName = "CodeDisplayExplorerFile";
