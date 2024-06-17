import { ReactNode } from "react";
import { EmailSubscriptionForm } from "@codebymedu/components/emailSubscriptionForm";

export const LandingEmailSubscriptionForm = () => {
  // --- RENDER ---

  return (
    <section className="my-16">
      <GlassCard>Frontend</GlassCard>
    </section>
  );
};

const GlassCard = ({ children }: { children: ReactNode }) => (
  <div className="h-16 w-full bg-violet-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  "></div>
);
