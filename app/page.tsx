import {
  CodeDisplay,
  CodeDisplayTab,
} from "@codebymedu/components/codeDisplay/codeDisplay";
import { title, subtitle } from "@codebymedu/components/primitives";
import { Tab, Tabs } from "@nextui-org/react";
import { UserIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Hi, I am</h1>
        <h1 className={title({ color: "violet" })}> Medu</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          You won&lsquo;t believe how simple and dynamic your web apps can be.
        </h2>
      </div>

      <div className="w-11/12 items-center mt-8">
        <CodeDisplay>
          <CodeDisplayTab />
        </CodeDisplay>
      </div>
    </section>
  );
}
