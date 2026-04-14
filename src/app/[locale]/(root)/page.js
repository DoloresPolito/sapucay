import { getTranslations, setRequestLocale } from "next-intl/server";
import Section from "@/src/components/structure/Section";
import HomeSection from "@/src/section/HomeSection";

export default async function HomePage({ params }) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations("Home");

  const texts = {
    hero: {
      title1: t("HeroHome.title1"),
      title2: t("HeroHome.title2"),
      subtitle: t("HeroHome.subtitle"),
      button: t("HeroHome.button"),
    },

    types: {
      title1: t("TypesHome.title1"),
      title2: t("TypesHome.title2"),
      subtitle: t("TypesHome.subtitle"),
      subtitle2: t("TypesHome.subtitle2"),
      items:t.raw("TypesHome.items"),
      types: t.raw("TypesHome.types"),
    },
    bird: {
     
      title3: t("BirdHome.title3"),
      subtitle3: t("BirdHome.subtitle3"),
      text3: t("BirdHome.text3"),
      button3: t("BirdHome.button3"),
      impact1: t("BirdHome.impact1"),
      impact2: t("BirdHome.impact2"),
      impact3: t("BirdHome.impact3"),
      impact4: t("BirdHome.impact4"),
    },

    levels: {
      title1: t("LevelsHome.title1"),
      title2: t("LevelsHome.title2"),
      subtitle: t("LevelsHome.subtitle"),
      button: t("LevelsHome.button"),
      items: t.raw("LevelsHome.items"),

    },

    levelsnew: {
      // title1: t("LevelsHome.title1"),
      // title2: t("LevelsHome.title2"),
      // subtitle: t("LevelsHome.subtitle"),
      // button: t("LevelsHome.button"),
      // items: t.raw("LevelsNewHome.items"),

    },


    habitar:{
      title1: t("HabitarHome.title1"),
      title2: t("HabitarHome.title2"),
      items: t.raw("HabitarHome.items"),
    }
  };

  return (
    <Section>
      <HomeSection texts={texts} />
    </Section>
  );
}


