import { getTranslations, setRequestLocale } from "next-intl/server";
import Section from "@/src/components/structure/Section";


import ScrollRevealSection from "@/src/components/Scroll/ScrollRevealSection";
import img1 from "@/public/images/home/herohome.png";
import img2 from "@/public/images/home/home1.png";

export default async function HomePage({ params }) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <Section>
        <ScrollRevealSection
          introImage={img1}
          descriptionText={t("herotitle")}
          sectionImage={img2}
          sectionTitle={t("herosubtitle")}
          sectionText={t("herobutton")}
        />

    </Section>
  );
}
