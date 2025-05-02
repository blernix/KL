"use client";
import BackgroundGeometric from "@/components/backgrounds/Background3D";
import { Hero, AboutMe, Process, Services, FAQ, Automations, DirectusSection, CTA } from "@/components/sections";


export default function Home() {
  return (
    <div>
      <BackgroundGeometric />
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