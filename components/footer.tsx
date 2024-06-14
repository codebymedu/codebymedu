import { siteConfig } from "@codebymedu/config/site";
import { EmailSubscriptionForm } from "./emailSubscriptionForm";
import { Link } from "@nextui-org/link";

export const Footer = () => {
  return (
    <footer className=" p-6 ">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row  md:justify-between md:items-center">
        <div className="mb-4 md:mb-0 font-thin">
          <p>© 2024 Meduard Krasniqi. All rights reserved.</p>
        </div>

        <div className="flex gap-4">
          {siteConfig.navItems.map((link) => (
            <Link
              key={link.href}
              className="text-black dark:invert"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
