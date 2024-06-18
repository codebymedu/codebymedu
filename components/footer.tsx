import { siteConfig } from "@codebymedu/config/site";
import { EmailSubscriptionForm } from "./emailSubscriptionForm";
import { Link } from "@nextui-org/link";

export const Footer = () => {
  return (
    <footer className="container max-w-7xl mx-auto p-6 border-t-[0.5px] border-neutral-200/50">
      <div className=" flex flex-col md:flex-row  md:justify-between md:items-center">
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

        <div className="mb-4 md:mb-0 font-thin">
          <p>© 2024 Meduard Krasniqi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
