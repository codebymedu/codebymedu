import { EmailSubscriptionForm } from "@codebymedu/components/emailSubscriptionForm";
import { subtitle, title } from "@codebymedu/components/primitives";

export default function Blog() {
  return (
    <div className="items-center py-8 md:py-10">
      <div className="w-full text-center">
        <h1 className={title()}>
          My
          <span className={title({ color: "violet" })}>
            {" "}
            &#36;&#123;Frontend&#125;
          </span>{" "}
          Blog
        </h1>

        <h2 className={subtitle({ class: "mt-4" })}>
          Don't miss out on my articles about frontend development and career
          advice.
        </h2>
      </div>

      <EmailSubscriptionForm />
    </div>
  );
}
