"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { submitContactForm } from "@codebymedu/components/contactForm/utils/contactFormActions";
import { budgetOptions } from "@codebymedu/components/contactForm/utils/contactFormConstants";
import { Button, Input, Textarea } from "@nextui-org/react";

export const ContactForm = () => {
  // --- STATE ---

  const [selectedBudget, setSelectedBudget] = useState("");

  const [formState, dispatchHandleSubmit] = useFormState(submitContactForm, {
    status: null,
  });

  // --- RENDER ---

  return (
    <form
      action={dispatchHandleSubmit}
      className="p-8 w-full shadow-md rounded-lg"
    >
      <input
        type="hidden"
        id="selectedBudget"
        name="selectedBudget"
        value={selectedBudget}
      />

      <h2 className="text-2xl mb-6 font-thin">
        I&apos;ll reply within the same day
      </h2>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="mb-4 w-full">
          <Input
            label="Name"
            placeholder="Your name"
            fullWidth
            errorMessage={formState.errorMessages?.name}
            isInvalid={Boolean(formState.errorMessages?.name)}
            name="name"
          />
        </div>

        <div className="mb-4 w-full">
          <Input
            type="text"
            label="Email"
            placeholder="Your email"
            fullWidth
            errorMessage={formState.errorMessages?.email}
            isInvalid={Boolean(formState.errorMessages?.email)}
            name="email"
          />
        </div>
      </div>

      <div className="mb-4">
        <p className="mb-2 text-xs">Your budget</p>
        <div className="flex flex-col md:flex-row md:items-center gap-4 ">
          {budgetOptions.map((option) => (
            <Button
              key={option.value}
              color={selectedBudget === option.value ? "secondary" : "default"}
              onClick={() => setSelectedBudget(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      {selectedBudget && (
        <div className="text-xs mb-4">
          {
            budgetOptions?.find((option) => option.value === selectedBudget)
              ?.description
          }
        </div>
      )}

      {formState.errorMessages?.selectedBudget && (
        <div className="text-xs mb-4">
          {formState.errorMessages?.selectedBudget}
        </div>
      )}

      <div className="mb-4">
        <Textarea
          label="Message"
          placeholder="Your message"
          fullWidth
          errorMessage={formState.errorMessages?.message}
          isInvalid={Boolean(formState.errorMessages?.message)}
          name="message"
        />
      </div>

      <Button type="submit" fullWidth>
        Submit
      </Button>
    </form>
  );
};
