'use client';

import { useMemo, useState } from "react";
import {
  Instagram,
  Linkedin,
  Youtube,
  LogIn,
  Globe,
  ChevronDown,
  X,
} from "lucide-react";

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
  const [open, setOpen] = useState(false);

  const socials = useMemo(() => props.socials ?? [], [props.socials]);

  return (
    <div className="relative z-40 w-full bg-[#0b2f57] text-white/80">
      <div className="site-pad flex w-full items-center justify-end gap-4 py-2 text-xs">
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            <span className="opacity-80">{props.socialLabel}</span>
            <div className="flex items-center gap-3">
              {socials.map((s) => {
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
          </div>

          <div className="relative sm:hidden">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-1 rounded px-2 py-1 transition hover:text-white"
              aria-haspopup="menu"
              aria-expanded={open}
            >
              <span className="opacity-90">{props.socialLabel}</span>
              {open ? (
                <X className="h-4 w-4 opacity-80" />
              ) : (
                <ChevronDown className="h-4 w-4 opacity-80" />
              )}
            </button>

            {open && (
              <div
                className="absolute left-0 top-full mt-2 min-w-[160px] rounded-md bg-[#0a2646] p-2 shadow-lg ring-1 ring-white/10"
                role="menu"
              >
                <div className="flex items-center gap-3 px-2 py-2">
                  {socials.map((s) => {
                    const Icon = ICON_MAP[s.icon];
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        aria-label={s.name}
                        className="rounded p-2 transition hover:bg-white/10 hover:text-white"
                        target="_blank"
                        rel="noreferrer"
                        role="menuitem"
                        onClick={() => setOpen(false)}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <span className="hidden sm:inline mx-1 opacity-40">|</span>

        <a
          href="#"
          className="flex items-center gap-2 transition hover:text-white"
        >
          <LogIn className="h-4 w-4" />
          <span className="hidden xs:inline">{props.signInText}</span>
          <span className="xs:hidden">Sign In</span>
        </a>

        <button className="inline-flex items-center gap-1 transition hover:text-white">
          <Globe className="h-4 w-4 opacity-80" />
          <span>{props.lang}</span>
        </button>
      </div>
    </div>
  );
}