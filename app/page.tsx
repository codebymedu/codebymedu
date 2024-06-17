import { LandingHero } from "@codebymedu/components/landing/landingHero";
import { LandingSkills } from "@codebymedu/components/landing/landingSkills";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <LandingHero />

      <LandingSkills />
    </>
  );
}
