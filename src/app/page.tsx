import { Hero, AboutMe, Process, Services, FAQ, Automations, DirectusSection, CTA } from "@/components/sections";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Process />
      <Services />
      <Automations/>
      <DirectusSection/>
      <FAQ />
      <CTA />
    </div>
  );
}