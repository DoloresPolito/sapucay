"use client";
import { useEffect } from "react";
import Section from "@/src/components/structure/Section";
import Lenis from "lenis";
import Hero from "../components/Destino/Hero";
import Map from "../components/Destino/Map";
import History from "../components/Destino/History";
import Culture from "../components/Destino/Culture";
import Pictures from "../components/Destino/Pictures";
import Nature1 from "../components/Destino/Nature1";
import Nature2 from "../components/Destino/Nature2";

export default function DestinoSection({ texts }) {
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
      <Map maptexts={texts.map} />
      <History historytexts={texts.history} />
      <Pictures />
      <Culture culturetexts={texts.culture} />
      <Nature1 naturetexts={texts.nature} />

      <Nature2 naturetexts={texts.nature} />
    </Section>
  );
}
