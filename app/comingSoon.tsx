import { EmailSubscriptionForm } from "@codebymedu/components/emailSubscriptionForm";
import { subtitle, title } from "@codebymedu/components/primitives";

export default function Blog() {
  return (
    <div className="items-center py-8 md:py-10">
      <div className="w-full text-center">
        <h1 className={title({ color: "violet" })}>
          &#36;&#123;Coming Soon&#125;
        </h1>

        <h2 className={subtitle({ class: "mt-4" })}>
          You Are Not Be Ready for What is Coming
        </h2>
      </div>

      <EmailSubscriptionForm />
    </div>
  );
}
