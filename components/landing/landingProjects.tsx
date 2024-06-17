import clsx from "clsx";
import { title } from "@codebymedu/components/primitives";
import { ProjectSwiper } from "@codebymedu/components/projectSwiper/projectSwiper";

export const LandingProjects = () => {
  return (
    <div className="my-32 w-full flex flex-col items-center">
      <h2
        className={clsx(
          title({ size: "sm", className: "font-light" }),
          "mx-auto mb-24 flex gap-3 items-center"
        )}
      >
        See For Yourself
      </h2>

      <div className="w-full">
        <ProjectSwiper />
      </div>
    </div>
  );
};
