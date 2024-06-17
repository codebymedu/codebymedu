"use client";

import clsx from "clsx";
import { title } from "@codebymedu/components/primitives";
import { Input, Textarea, Button, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";
import { supabase } from "@codebymedu/lib/supabase/supabase";
import { useFormState } from "react-dom";
import { z } from "zod";
import toast from "react-hot-toast";

const budgetOptions = [
  {
    value: "basic",
    label: "Basic (€450 - €900)",
    description:
      "Simple site with a few pages and basic features like contact forms and simple styling. Best for small businesses or personal use.",
  },
  {
    value: "standard",
    label: "Standard (€900 - €3,700)",
    description:
      "Medium site with multiple pages, custom features, better design, and some interactive elements. Suitable for small to medium businesses.",
  },
  {
    value: "premium",
    label: "Premium (€3,700+)",
    description:
      "Large site with custom design, advanced features, integrations, and high-quality visuals. Perfect for larger businesses or complex needs.",
  },
];

const formSchema = z.object({
  selectedBudget: z
    .string({ message: "Budget is required" })
    .min(1, "Budget is required"),
  name: z
    .string({ message: "Your name is required" })
    .min(1, "Name is required"),
  email: z
    .string({ message: "Your email is required" })
    .email("Invalid email address"),
  message: z
    .string({ message: "Your message is required" })
    .min(1, "Message is required"),
});

export const LandingContact = () => {
  // --- STATE ---

  const [selectedBudget, setSelectedBudget] = useState("");

  // --- CALLBACKS ---

  const handleSubmit = async (
    _: unknown,
    formData: FormData
  ): Promise<{
    status: "error" | "success" | null;
    errorMessages?: {
      selectedBudget?: string[] | undefined;
      name?: string[] | undefined;
      email?: string[] | undefined;
      message?: string[] | undefined;
    };
  }> => {
    const validatedFormData = formSchema.safeParse({
      selectedBudget: formData.get("selectedBudget"),
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (validatedFormData.error) {
      return {
        status: "error",
        errorMessages: validatedFormData.error.flatten().fieldErrors,
      };
    }

    const { error } = await supabase.from("contact_submissions").insert([
      {
        name: validatedFormData.data.name,
        email: validatedFormData.data.email,
        selected_budget: validatedFormData.data.selectedBudget,
        message: validatedFormData.data.message,
      },
    ]);

    if (error) {
      console.error({ error });

      return { status: "error" };
    }

    toast.success("I received your message, I'll get in touch shortly.");

    return { status: "success" };
  };

  // --- STATE 2 ---

  const [formState, dispatchHandleSubmit] = useFormState(handleSubmit, {
    status: null,
  });

  // --- RENDER ---

  return (
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
                I'll reply within the same day
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
                      color={
                        selectedBudget === option.value
                          ? "secondary"
                          : "default"
                      }
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
                    budgetOptions?.find(
                      (option) => option.value === selectedBudget
                    )?.description
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
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
