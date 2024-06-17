"use client";

import { useState } from "react";
import { steps } from "@codebymedu/components/horizontalRoadmap/utils/horizontalRoadmapConstants";
import { HorizontalRoadmapStepCard } from "@codebymedu/components/horizontalRoadmap/components/horizontalRoadmapStepCard";
import { HorizontalRoadmapStepView } from "@codebymedu/components/horizontalRoadmap/components/horizontalRoadmapStepView";

export const HorizontalRoadmap = () => {
  // --- STATE ---

  const [activeStepId, setActiveStepId] = useState(1);

  const [seenSteps, setSeenSteps] = useState([1]);

  const activeStep = steps.find(({ id: stepId }) => stepId === activeStepId);

  // --- CALLBACKS ---

  const handleChangeStep = (stepId: number) => {
    setActiveStepId(stepId);

    if (seenSteps.includes(stepId)) {
      return;
    }

    setSeenSteps((currentSeenSteps) => [...currentSeenSteps, stepId]);
  };

  // --- RENDER ---

  if (!activeStep) {
    return null;
  }

  return (
    <div className="mt-16 w-full">
      <div className="  overflow-x-auto">
        <div className="min-w-[1200px] grid grid-cols-5 gap-4 ">
          {steps.map((step) => (
            <HorizontalRoadmapStepCard
              step={step}
              key={step.id}
              handleChangeStep={handleChangeStep}
              isStepActive={step.id === activeStepId}
              isStepSeen={seenSteps.includes(step.id)}
            />
          ))}
        </div>
      </div>

      <HorizontalRoadmapStepView step={activeStep} />
    </div>
  );
};
