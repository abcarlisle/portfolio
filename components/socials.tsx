import { Link } from "@nextui-org/link";

import { DiscordIcon, GithubIcon, TwitterIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export const Socials = () => {
  return (
    <div className="flex items-center gap-4">
      <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
        <TwitterIcon className="text-default-500" />
      </Link>
      <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
        <DiscordIcon className="text-default-500" />
      </Link>
      <Link isExternal aria-label="Github" href={siteConfig.links.github}>
        <GithubIcon className="text-default-500" />
      </Link>

      <Link isExternal aria-label="Github" href={siteConfig.links.github}>
        <GithubIcon className="text-default-500" />
      </Link>
      {/* </NavbarItem><ThemeSwitch /> */}
    </div>
  );
};
