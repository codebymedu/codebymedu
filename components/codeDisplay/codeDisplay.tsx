import { ReactNode } from "react";
import { CodeDisplayTab } from "@codebymedu/components/codeDisplay/components/codeDisplayTab";
import { Card, CardBody } from "@nextui-org/react";

type CodeDisplayProps = { children: ReactNode };

const CodeDisplay = ({ children }: CodeDisplayProps) => (
  <Card className="w-full h-80 shadow-[0px_-8px_3000px_0px_#b249f8] ">
    <CardBody className="items-center">{children}</CardBody>
  </Card>
);

export { CodeDisplay, CodeDisplayTab };
