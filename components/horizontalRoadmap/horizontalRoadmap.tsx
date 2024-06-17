"use client";

import clsx from "clsx";
import { getOrdinalSuffix } from "@codebymedu/utils/helpers";
import { useState } from "react";
import { Progress } from "@nextui-org/react";
import { subtitle } from "@codebymedu/components/primitives";
import { Card, CardBody } from "@nextui-org/react";

const steps = [
  {
    id: 1,
    title: "I Listen to You",
    description:
      "I start by understanding your vision. We discuss your ideas, goals, and needs. Your input is crucial to shape the project from the ground up.",
    tools: ["MS Teams/Meets", "Email", "Notion"],
    deliverables: [
      "Project Requirements Document",
      "Meeting Notes",
      "Goals Summary",
    ],
  },
  {
    id: 2,
    title: "We Plan and Build Together",
    description:
      "We create a clear plan and I use top technologies like Next.js, React, and Typescript to turn designs into working web applications. Your feedback helps at each stage.",
    tools: [
      "Next.js/React",
      "Typescript",
      "ClickUp or similar",
      "... and more",
    ],
    deliverables: [
      "Project Plan",
      "Development Roadmap",
      "Wireframes",
      "Initial Codebase",
    ],
  },
  {
    id: 3,
    title: "I Ensure Quality",
    description:
      "Through Code Reviews and Continuous Integration, I keep the code high-quality and efficient. Automated tests and linters help maintain standards.",
    tools: ["Jest", "Cypress", "ESLint", "Prettier", "GitHub or similar"],
    deliverables: [
      "Automated tests",
      "CI/CD Pipeline",
      "Test Reports",
      "Linting Reports",
    ],
  },
  {
    id: 4,
    title: "We Test and Launch Together",
    description:
      "I carefully test the application to find and fix any issues. Once everything is perfect, I handle the deployment process and ensure a smooth launch.",
    tools: ["Docker", "AWS, Vercel or similar", "GitHub Actions"],
    deliverables: [
      "Deployment Scripts",
      "Live Application",
      "Monitoring Setup",
    ],
  },
  {
    id: 5,
    title: "I Grow with You",
    description:
      "After launch, I stay in touch to gather user feedback and make necessary updates. Our collaboration continues to ensure the product evolves with your needs.",
    tools: ["Google Analytics", "Hotjar", "GitHub", "Slack"],
    deliverables: [
      "User Feedback Reports",
      "Analytics Dashboards",
      "Regular Updates",
      "Support Documentation",
    ],
  },
];

export const HorizontalRoadmap = () => {
  // --- STATE ---

  const [activeStepId, setActiveStepId] = useState(1);

  const [readSteps, setReadSteps] = useState([1]);

  const activeStep = steps.find(({ id: stepId }) => stepId === activeStepId);

  // --- CALLBACKS ---

  const handleChangeStep = (stepId: number) => {
    setActiveStepId(stepId);

    if (readSteps.includes(stepId)) {
      return;
    }

    setReadSteps((currentReadSteps) => [...currentReadSteps, stepId]);
  };

  // --- RENDER ---

  if (!activeStep) {
    return null;
  }

  return (
    <div className="mt-16 ">
      <div className="grid grid-cols-5 gap-8">
        {steps.map((step) => (
          <div
            role="button"
            tabIndex={0}
            key={step.id}
            className={clsx(
              "flex flex-col gap-4 h-full justify-between px-3 py-6 rounded-lg cursor-pointer",
              step.id === activeStepId
                ? "bg-gradient-to-t from-violet-600/50 to-violet-400/50"
                : undefined
            )}
            onClick={() => handleChangeStep(step.id)}
            aria-label={step.title}
          >
            <div className="flex items-start col-span-1 justify-between">
              <div className="flex gap-4 items-start">
                <div className="h-2 w-2 bg-violet-700 rounded-full"></div>

                <p
                  className={clsx(
                    "pt-0 -mt-2  ",
                    step.id === activeStepId
                      ? "text-white"
                      : "text-black dark:text-white"
                  )}
                >
                  {step.title}
                </p>
              </div>

              <p className="text-xs -mt-1 text-white ">{step.id}</p>
            </div>

            <Progress
              color="default"
              value={readSteps.includes(step.id) ? 100 : 0}
              classNames={{
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-violet-300 to-violet-500",
              }}
            />
          </div>
        ))}
      </div>

      <div className="mt-8 p-2 flex justify-between">
        <div className=" w-96">
          <h3 className={subtitle()}>
            {activeStep.id}
            {getOrdinalSuffix(activeStep.id)} Step: {activeStep.title}
          </h3>

          <p>{activeStep.description}</p>
        </div>

        <Card className="w-72 h-96">
          <CardBody className="p-6">
            <h2 className="text-lg font-semibold mb-4">Deliverables</h2>

            <ul className="list-disc pl-4 mb-6">
              {activeStep.deliverables.map((deliverable) => (
                <li>{deliverable}</li>
              ))}
            </ul>

            <h2 className="text-lg font-semibold mb-4">Tools</h2>

            <ul className="list-disc pl-4 ">
              {activeStep.tools.map((tool) => (
                <li>{tool}</li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
