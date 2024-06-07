import { ReactNode } from "react";

type CodeDisplayCodeContentProps = { children: ReactNode };

export const CodeDisplayCodeContent = ({
  children,
}: CodeDisplayCodeContentProps) => {
  // --- HELPERS ---

  const lineNumbers = Array.from({ length: 8 }, (_, index) => index + 1);

  // --- RENDER ---

  return (
    <div className="grid grid-cols-12 ">
      <div className="w-8 mr-4 flex flex-col items-end col-span-1 ">
        {lineNumbers.map((lineNumber) => (
          <span key={lineNumber} className="pb-1">
            {lineNumber}
          </span>
        ))}
      </div>

      <div className="col-span-11">{children}</div>
    </div>
  );
};
