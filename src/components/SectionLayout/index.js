
import ScrollRevealSection from "@/src/components/Scroll/ScrollRevealSection";

export default function SectionLayout({ images, texts }) {



  return (
    <ScrollRevealSection
      introImage={images[0]}
      texts={texts}
      sectionImage={images[4]}
    />
  );
}
