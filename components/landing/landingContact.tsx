import clsx from "clsx";
import { title } from "@codebymedu/components/primitives";
import { Card, CardBody } from "@nextui-org/react";
import { ContactForm } from "@codebymedu/components/contactForm/contactForm";

export const LandingContact = () => (
  <div className="my-32 w-full flex flex-col items-center">
    <h2
      className={clsx(
        title({ size: "sm", className: "font-light" }),
        "mx-auto mb-24 flex gap-3 items-center"
      )}
    >
      Lets Create Something Great
    </h2>

    <div className="w-full">
      <Card>
        <CardBody>
          <ContactForm />
        </CardBody>
      </Card>
    </div>
  </div>
);
