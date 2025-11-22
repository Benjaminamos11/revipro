import { Hero } from "@/components/sections/hero";
import { BentoGrid } from "@/components/sections/bento-grid";
import { Team } from "@/components/sections/team";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <Team />
      <Services />
    </>
  );
}
