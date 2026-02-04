'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export function NavBar(props: {
  brand: { logo: string; alt: string };
  links: readonly NavLink[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="absolute left-0 right-0 top-[32px] z-30">
      <div className="site-pad flex w-full items-center justify-between py-5">
        <Link href="/" className="flex items-center">
          <Image
            src={props.brand.logo}
            alt={props.brand.alt}
            width={200}
            height={56}
            priority
            className="h-10 w-auto md:h-11 lg:h-12"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-white/90">
          {props.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-slab font-medium text-[14px] xl:text-[16px] hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded bg-white/10 px-3 py-2 text-white hover:bg-white/15 transition"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-[9999]">
          <div
            className="absolute inset-0 bg-black/55"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-[32px] h-[calc(100vh-32px)] w-[82%] max-w-[360px] bg-[#061a2f] shadow-2xl">
            <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
              <div className="text-white/90 font-slab font-medium">Menu</div>
              <button
                type="button"
                className="rounded bg-white/10 p-2 text-white hover:bg-white/15 transition"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="px-5 py-4">
              <ul className="flex flex-col gap-1">
                {props.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="block rounded px-3 py-3 text-white/90 font-slab text-[16px] hover:bg-white/10 hover:text-white transition"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}