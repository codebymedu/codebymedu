import {
  CodeDisplay,
  CodeDisplayTab,
} from "@codebymedu/components/codeDisplay/codeDisplay";
import { title, subtitle } from "@codebymedu/components/primitives";
import { CodeDisplayTabContent } from "@codebymedu/components/codeDisplay/components/codeDisplayTabContent";
import { Suspense } from "react";
import { Skeleton } from "@nextui-org/skeleton";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>
          Hi, I am
          <span className={title({ color: "violet" })}>
            {" "}
            &#36;&#123;Medu&#125;
          </span>
        </h1>

        <br />

        <h2 className={subtitle({ class: "mt-4" })}>
          You won&lsquo;t believe how simple and dynamic your web apps can be.
        </h2>
      </div>

      <div className="w-full md:w-9/12 items-center md:mt-8">
        <CodeDisplay>
          <Suspense
            fallback={
              <div className="w-full flex justify-center">
                <Skeleton className="w-full h-72" />
              </div>
            }
          >
            <CodeDisplayTab />

            <CodeDisplayTabContent />
          </Suspense>
        </CodeDisplay>
      </div>
    </section>
  );
}
