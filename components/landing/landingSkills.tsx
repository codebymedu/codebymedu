import clsx from "clsx";
import { title } from "@codebymedu/components/primitives";
import { HorizontalRoadmap } from "@codebymedu/components/horizontalRoadmap/horizontalRoadmap";

export const LandingSkills = () => {
  return (
    <div className="my-28 w-full flex flex-col items-center">
      <h2
        className={clsx(
          title({ size: "sm", className: "font-light" }),
          "mx-auto mb-12"
        )}
      >
        How My Skills Transform Your Ideas Into Reality.
      </h2>

      <HorizontalRoadmap />
    </div>
  );
};
