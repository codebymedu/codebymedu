import { EmailSubscriptionForm } from "@codebymedu/components/emailSubscriptionForm";
import { title } from "@codebymedu/components/primitives";

export default function Blog() {
  return (
    <div className="items-center py-8 md:py-10">
      <div className="w-full text-center">
        <h1 className={title({ color: "violet" })}>
          &#36;&#123;Category&#125;
        </h1>
      </div>

      <EmailSubscriptionForm />
    </div>
  );
}
