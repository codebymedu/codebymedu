import { LandingHero } from "@codebymedu/components/landing/landingHero";
import { LandingSkills } from "@codebymedu/components/landing/landingSkills";
import { LandingProjects } from "@codebymedu/components/landing/landingProjects";

export default function Home() {
  return (
    <>
      <LandingHero />

      <LandingSkills />

      <LandingProjects />
    </>
  );
}
