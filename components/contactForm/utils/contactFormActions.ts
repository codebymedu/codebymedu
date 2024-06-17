import { supabase } from "@codebymedu/lib/supabase/supabase";
import toast from "react-hot-toast";
import { z } from "zod";

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

export const submitContactForm = async (
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

  toast.success("I received your message, I'll get in contact you shortly.");

  return { status: "success" };
};
