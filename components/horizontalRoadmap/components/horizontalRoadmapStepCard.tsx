import { Progress } from "@nextui-org/react";
import clsx from "clsx";

type HorizontalRoadmapStepCardProps = {
  isStepActive: boolean;
  step: { id: number; title: string; description: string };
  handleChangeStep: (stepId: number) => void;
  isStepSeen: boolean;
};

export const HorizontalRoadmapStepCard = ({
  isStepActive,
  handleChangeStep,
  isStepSeen,
  step,
}: HorizontalRoadmapStepCardProps) => (
  <div
    role="button"
    tabIndex={0}
    key={step.id}
    className={clsx(
      "flex flex-col gap-4 h-full justify-between px-3 py-6 rounded-lg cursor-pointer min-w-56 ",
      isStepActive
        ? "bg-gradient-to-t from-violet-600/50 to-violet-400/50"
        : undefined
    )}
    onClick={() => handleChangeStep(step.id)}
    aria-label={step.title}
  >
    <div className="flex items-start col-span-1 justify-between">
      <div className="flex gap-4 items-start">
        <div
          className={clsx(
            "min-h-2 min-w-2 rounded-full",
            isStepActive ? "bg-white" : "bg-violet-700"
          )}
        />

        <p
          className={clsx(
            "pt-0 -mt-2  ",
            isStepActive ? "text-white" : "text-black dark:text-white"
          )}
        >
          {step.title}
        </p>
      </div>
    </div>

    <Progress
      color="default"
      value={isStepSeen ? 100 : 0}
      classNames={{
        track: "drop-shadow-md border border-default",
        indicator: "bg-gradient-to-r from-violet-300 to-violet-500",
      }}
    />
  </div>
);
