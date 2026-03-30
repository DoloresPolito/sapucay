import { getTranslations, setRequestLocale } from "next-intl/server";
import Section from "@/src/components/structure/Section";
import ImpactoSection from "@/src/section/ImpactoSection";

export default async function ImpactoPage({ params }) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations("Impacto");

  const texts = {
    hero: {
      title1: t("HeroImpacto.title1"),
      title2: t("HeroImpacto.title2"),
      subtitle: t("HeroImpacto.subtitle"),
      text1: t("HeroImpacto.text1"),
      text2: t("HeroImpacto.text2"),
    },
    turismo: {
      title: t("TurismoImpacto.title"),
      subtitle: t("TurismoImpacto.subtitle"),
      text1: t("TurismoImpacto.text1"),
      text2: t("TurismoImpacto.text2"),
      options: t.raw("TurismoImpacto.options"),
      text3: t("TurismoImpacto.text3"),
      text4: t("TurismoImpacto.text4"),
    },
    sunset: {
      title: t("SunsetImpacto.title"),
      subtitle: t("SunsetImpacto.subtitle"),
      text1: t("SunsetImpacto.text1"),
      text2: t("SunsetImpacto.text2"),
    },
    sky:{
      title: t("SkyImpacto.title"),
      subtitle: t("SkyImpacto.subtitle"),
      text1: t("SkyImpacto.text1"),
      text2: t("SkyImpacto.text2"),
      options: t.raw("SkyImpacto.options"),
      text3: t("SkyImpacto.text3"),
      text4: t("SkyImpacto.text4"),

    },
    levels:{
      items:t.raw("LevelsImpacto.items")
    }
  };

  return (
    <Section>
      <ImpactoSection texts={texts} />
    </Section>
  );
}
