import { ReactNode } from "react";
import { CodeDisplayTab } from "@codebymedu/components/codeDisplay/components/codeDisplayTab";
import { Card, CardBody } from "@nextui-org/react";

type CodeDisplayProps = { children: ReactNode };

const CodeDisplay = ({ children }: CodeDisplayProps) => {
  // --- RENDER ---

  return (
    <Card className="w-full py-4 shadow-[0px_-8px_3000px_0px_#b249f8] ">
      <CardBody className=" items-center">{children}</CardBody>

      <CardBody className="">
        <pre>
          {`
          <html>test</html>
          `}
        </pre>
      </CardBody>
    </Card>
  );
};

export { CodeDisplay, CodeDisplayTab };
