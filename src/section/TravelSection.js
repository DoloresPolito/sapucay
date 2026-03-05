
"use client"
import { useEffect } from "react";
import ScrollRevealSection from "@/src/components/ScrollTravel/ScrollRevealSection";
import Lenis from "lenis";
export default function TravelSection({ images, texts }) {


  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
    <ScrollRevealSection
      introImage={images[0]}
      texts={texts}
      sectionImage={images[4]}
    />
   
</>
  );
}
