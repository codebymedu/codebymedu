import { subtitle } from "@codebymedu/components/primitives";
import { getOrdinalSuffix } from "@codebymedu/utils/helpers";
import { Card, CardBody } from "@nextui-org/react";

type HorizontalRoadmapStepViewProps = {
  step: {
    id: number;
    title: string;
    description: string;
    deliverables: string[];
    tools: string[];
  };
};

export const HorizontalRoadmapStepView = ({
  step,
}: HorizontalRoadmapStepViewProps) => (
  <div className="mt-8 p-2 flex flex-col md:flex-row gap-5 md:gap-0 justify-between">
    <div className=" w-96">
      <h3 className={subtitle()}>
        {step.id}
        {getOrdinalSuffix(step.id)} Step: {step.title}
      </h3>

      <p>{step.description}</p>
    </div>

    <Card className="w-72 h-96">
      <CardBody className="p-6">
        <h2 className="text-lg font-semibold mb-4">Deliverables</h2>

        <ul className="list-disc pl-4 mb-6">
          {step.deliverables.map((deliverable) => (
            <li key={deliverable}>{deliverable}</li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mb-4">Tools</h2>

        <ul className="list-disc pl-4 ">
          {step.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </CardBody>
    </Card>
  </div>
);
