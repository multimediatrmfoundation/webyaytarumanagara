import Image from "next/image";
import Link from "next/link";

export type NavLink = {
  label: string;
  href: string;
};

export function NavBar(props: {
  brand: { logo: string; alt: string };
  links: readonly NavLink[]; 
}) {
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

        <nav className="hidden md:flex items-center gap-10 text-white/90">
          {props.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-slab font-medium text-[13px] lg:text-[15px] xl:text-[16px] hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button className="md:hidden rounded bg-white/10 px-3 py-2 text-white">
          ☰
        </button>
      </div>
    </div>
  );
}