import { ReactNode } from "react";

type TagDisplayProps = { children: ReactNode; tag: string };

export const TagDisplay = ({ children, tag }: TagDisplayProps) => (
  <div className="pl-4 pb-[5px]">
    <span className="text-violet-500 pb-[5px]">{`<${tag}>`}</span>

    <span>{children}</span>

    <span className="text-violet-500">{`</${tag}>`}</span>
  </div>
);
