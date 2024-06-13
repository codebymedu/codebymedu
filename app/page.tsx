import {
  CodeDisplay,
  CodeDisplayTab,
} from "@codebymedu/components/codeDisplay/codeDisplay";
import { title, subtitle } from "@codebymedu/components/primitives";
import { CodeDisplayTabContent } from "@codebymedu/components/codeDisplay/components/codeDisplayTabContent";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Hi, I am</h1>
        <h1 className={title({ color: "violet" })}> &#36;&#123;Medu&#125;</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          You won&lsquo;t believe how simple and dynamic your web apps can be.
        </h2>
      </div>

      <div className="w-9/12 items-center mt-8">
        <CodeDisplay>
          <CodeDisplayTab />

          <Suspense
            fallback={
              <div className="w-full flex justify-center">
                <Spinner />
              </div>
            }
          >
            <CodeDisplayTabContent />
          </Suspense>
        </CodeDisplay>
      </div>
    </section>
  );
}
