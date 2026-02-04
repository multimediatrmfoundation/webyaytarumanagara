import { homeDummy } from "@/src/lib/dummy/home";
import { TopBar } from "@/src/components/site/TopBar";
import { NavBar } from "@/src/components/site/NavigationBar";
import { Hero } from "@/src/components/site/Hero";

export default function Page() {
  const { topBar, nav, hero } = homeDummy;

  return (
    <main className="min-h-screen bg-[#061a2f]">
      <TopBar {...topBar} />
      <NavBar {...nav} />
      <Hero {...hero} />
    </main>
  );
}
