import { getTranslations, setRequestLocale } from "next-intl/server";
import Section from "@/src/components/structure/Section";
import HomeSection from "@/src/section/HomeSection";

export default async function HomePage({ params }) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations("Home");

  const texts = {
    hero: {
      title: t("HeroHome.title"),
      subtitle: t("HeroHome.subtitle"),
      button: t("HeroHome.button"),
    },
    bird: {
      title: t("BirdHome.title"),
      subtitle: t("BirdHome.subtitle"),
      button:t("BirdHome.button"),
      title2: t("BirdHome.title2"),
      text21: t("BirdHome.text2-1"),
      text22: t("BirdHome.text2-2"),
      button2:t("BirdHome.button2"),
      title3: t("BirdHome.title3"),
      subtitle3: t("BirdHome.subtitle3"),
      text3: t("BirdHome.text3"),
      button3:t("BirdHome.button3"),

   
    },


    levels: {
      title: t("LevelsHome.title"),
      subtitle: t("LevelsHome.subtitle"),
      button: t("LevelsHome.button"),
      items: t.raw("LevelsHome.items"),
    }
   
  
  }




  return (
    <Section>
      <HomeSection texts={texts}/>
    </Section>
  );
}
