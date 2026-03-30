"use client";
import { useEffect } from "react";
import Section from "@/src/components/structure/Section";
import Lenis from "lenis";
import Hero from "../components/Impacto/Hero";
import Turism from "../components/Impacto/Turism";
import Sunset from "../components/Impacto/Sunset";
import Sky from "../components/Impacto/Sky/Index";
import Levels from "../components/Impacto/Levels";


export default function ImpactoSection({ texts }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Section>
      <Hero herotexts={texts.hero} />
      <Turism turismtexts={texts.turismo} />
      <Sunset sunsettexts={texts.sunset} />
      <Levels levelstexts={texts.levels}/>
      <Sky skytexts={texts.sky} />

    </Section>
  );
}
