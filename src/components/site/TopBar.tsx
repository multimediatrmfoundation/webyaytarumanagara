import { Instagram, Linkedin, Youtube, LogIn, Globe } from "lucide-react";

export type SocialIcon = "instagram" | "linkedin" | "youtube";

export type Social = {
  name: string;
  href: string;
  icon: SocialIcon;
};

const ICON_MAP = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
} as const;

export function TopBar(props: {
  socialLabel: string;
  socials: readonly Social[];
  signInText: string;
  lang: string;
}) {
  return (
    <div className="relative z-40 w-full bg-[#0b2f57] text-white/80">
      <div className="site-pad flex w-full items-center justify-end gap-4 py-2 text-xs">
        <span className="opacity-80">{props.socialLabel}</span>

        <div className="flex items-center gap-3">
          {props.socials.map((s) => {
            const Icon = ICON_MAP[s.icon];
            return (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="transition hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <span className="mx-1 opacity-40">|</span>

        <a href="#" className="flex items-center gap-2 transition hover:text-white">
          <LogIn className="h-4 w-4" />
          <span>{props.signInText}</span>
        </a>

        <button className="inline-flex items-center gap-1 transition hover:text-white">
          <Globe className="h-4 w-4 opacity-80" />
          <span>{props.lang}</span>
        </button>
      </div>
    </div>
  );
}