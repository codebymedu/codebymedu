import { ReactNode } from "react";
import { CodeDisplayTab } from "@codebymedu/components/codeDisplay/components/codeDisplayTab";
import { Card, CardBody } from "@nextui-org/react";
import { TagDisplay } from "@codebymedu/components/tagDisplay";

type CodeDisplayProps = { children: ReactNode };

const CodeDisplay = ({ children }: CodeDisplayProps) => {
  // --- HELPERS ---

  const lineNumbers = Array.from({ length: 10 }, (_, index) => index + 1);

  // --- RENDER ---

  return (
    <Card className="w-full py-4 shadow-[0px_-8px_3000px_0px_#b249f8] ">
      <CardBody className="items-center">{children}</CardBody>
    </Card>
  );
};

export { CodeDisplay, CodeDisplayTab };
