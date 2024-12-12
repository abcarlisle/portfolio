import Link from "next/link";

import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export const Socials = () => {
  return (
    <div className="flex items-center gap-4">
      <Link aria-label="Linkedin" href={siteConfig.links.linkedin}>
        <LinkedinIcon className="text-default-500" />
      </Link>
      <Link aria-label="Github" href={siteConfig.links.github}>
        <GithubIcon className="text-default-500" />
      </Link>
    </div>
  );
};
