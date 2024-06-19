"use client";

import { supabase } from "@codebymedu/lib/supabase/supabase";
import { Input, Button } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type EmailSubscriptionFormProps = {
  label?: string;
  handleSuccess?: () => void;
};

export const EmailSubscriptionForm = ({
  label = "Subscribe to get notified",
  handleSuccess,
}: EmailSubscriptionFormProps) => {
  // --- CALLBACKS ---

  const handleSubscribe = async (_: unknown, formData: FormData) => {
    const email = formData.get("email");

    const validation = emailSchema.safeParse({ email });

    if (!validation.success) {
      return { message: validation.error.issues[0].message };
    }

    const { error } = await supabase
      .from("email_subscribers")
      .insert([{ email }]);

    if (error) {
      console.error({ email_subscription_error: error });

      return { message: "Error subscribing. Please try again." };
    }

    handleSuccess?.();

    return { message: "Subscribed successfully :)" };
  };

  // --- STATE ---

  const [formState, dispatchHandleSubscribe] = useFormState(handleSubscribe, {
    message: "",
  });

  // --- RENDER ---

  return (
    <form
      action={dispatchHandleSubscribe}
      className="flex flex-col gap-4 items-center mt-16"
    >
      <h3>{label}</h3>
      <div className="flex gap-4  ">
        <Input
          isClearable
          placeholder="Email"
          variant="bordered"
          name="email"
        />

        <Button type="submit" variant="flat" className="px-8">
          Subscribe
        </Button>
      </div>

      {formState?.message && <p>{formState.message}</p>}
    </form>
  );
};
