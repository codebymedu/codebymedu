"use client";

import {
  ArrowPathIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  CogIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import { getOrdinalSuffix } from "@codebymedu/utils/helpers";
import { useState } from "react";
import { Chip, Progress, Slider } from "@nextui-org/react";
import { subtitle } from "@codebymedu/components/primitives";

const steps = [
  {
    id: 1,
    title: "I Listen to You",
    description:
      "I start by understanding your vision. We discuss your ideas, goals, and needs. Your input is crucial to shape the project from the ground up.",
    Icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 2,
    title: "We Plan and Build Together",
    description:
      "We create a clear plan and I use top technologies like Next.js, React, and Typescript to turn designs into working web applications. Your feedback helps at each stage.",
    Icon: CogIcon,
  },
  {
    id: 3,
    title: "We Ensure Quality",
    description:
      "Through Code Reviews and Continuous Integration, I keep the code high-quality and efficient. Your involvement in reviews ensures the project meets your standards.",
    Icon: CheckCircleIcon,
  },
  {
    id: 4,
    title: "We Test and Launch Together",
    description:
      "I carefully test the application to find and fix any issues. Once everything is perfect, I handle the deployment process and ensure a smooth launch.",
    Icon: RocketLaunchIcon,
  },
  {
    id: 5,
    title: "I Grow with You",
    description:
      "After launch, I stay in touch to gather user feedback and make necessary updates. Our collaboration continues to ensure the product evolves with your needs.",
    Icon: ArrowPathIcon,
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

                <p className="pt-0 -mt-2 text-white">{step.title}</p>
              </div>

              <p className="text-xs -mt-1 text-white">{step.id}</p>
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

      <div className="mt-8 p-2 w-96">
        <h3 className={subtitle()}>
          {activeStep.id}
          {getOrdinalSuffix(activeStep.id)} Step: {activeStep.title}
        </h3>

        <p>{activeStep.description}</p>

        {/* TODO: Right side: Deliverables, tools, etc. */}
      </div>
    </div>
  );
};
