export const homeDummy = {
  topBar: {
    socialLabel: "Media Sosial",
    socials: [
      { name: "Instagram", href: "#", icon: "instagram" },
      { name: "LinkedIn", href: "#", icon: "linkedin" },
      { name: "YouTube", href: "#", icon: "youtube" },
    ] as const,
    signInText: "Sign In",
    lang: "ID",
  },

  nav: {
    brand: {
      logo: "/logo/logoyay.png",
      alt: "",
    },
    links: [
      { label: "Tentang Kami", href: "#" },
      { label: "Berita & Kegiatan", href: "#" },
      { label: "Unit Kami", href: "#" },
      { label: "Kerja Sama", href: "#" },
      { label: "Karir", href: "#" },
    ],
  },

  hero: {
    backgroundImage: "/dummy/hero.jpg",
    kicker: "Tarumanagara Foundation",
    title: "PRIDE IN EXCELLENCE",
  },
} as const;