"use client"
import { useEffect } from "react";
import Section from "@/src/components/structure/Section";
import SlideA from "@/src/components/Home/SlideA";
import SlideB from "@/src/components/Home/SlideB";
import Hero from "@/src/components/Home/Hero";
import Bird from "../components/Home/Bird";
import Impact from "../components/Home/Impact";
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
      <SlideA />
      <SlideB levelstexts={texts.levels}/>

      <Bird birdtexts={texts.bird}/>
      <Impact impacttexts={texts.impact}/>
    </Section>
  );
}
