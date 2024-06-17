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
      {/* Roadmap with line filled as you scroll, 
        https://chatgpt.com/c/642e3fd7-2699-4134-9653-752decde2691

        when you click in a step (make it clear that its clickable) it opens a modal with more information

        it can be horizontal fully, and switch to next step as you scroll
        https://codyhouse.co/demo/horizontal-timeline/index.html

        */}

      <HorizontalRoadmap />
    </div>
  );
};
