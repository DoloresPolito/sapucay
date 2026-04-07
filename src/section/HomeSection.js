"use client"
import { useEffect } from "react";
import Section from "@/src/components/structure/Section";
import SlideA from "@/src/components/Home/SlideA";
import SlideB from "@/src/components/Home/SlideB";
import Hero from "@/src/components/Home/Hero";
import Bird from "../components/Home/Bird";
import Impact from "../components/Home/Impact";
import Habitar from "../components/Home/Habitar";

import Lenis from "lenis";



export default function HomeSection({texts}) {

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
      <Hero herotexts={texts.hero}/>
      <SlideA typestexts={texts.types}/>
      <SlideB levelstexts={texts.levels} typestexts={texts.types}/>

      <Bird birdtexts={texts.bird}/>
      <Impact impacttexts={texts.impact}/>
      <Habitar habitartexts={texts.habitar}/>
    </Section>
  );
}
