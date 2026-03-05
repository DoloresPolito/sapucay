"use client"
import { useEffect } from "react";
import Section from "@/src/components/structure/Section";
import SlideA from "@/src/components/Home/SlideA";
import SlideB from "@/src/components/Home/SlideB";
import Hero from "@/src/components/Home/Hero";
import Lenis from "lenis";

export default function HomeSection() {

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
      <Hero />
      <SlideA />
      <SlideB />
    </Section>
  );
}
