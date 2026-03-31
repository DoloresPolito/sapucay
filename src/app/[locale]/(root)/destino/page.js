import { getTranslations, setRequestLocale } from "next-intl/server";
import Section from "@/src/components/structure/Section";
import DestinoSection from "@/src/section/DestinoSection";


export default async function DestinoPage({ params }) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations("Destino");

  const texts = {
    hero: {
      title1: t("HeroDestino.title"),
      subtitle: t("HeroDestino.subtitle"),
      text: t("HeroDestino.text"),
    },

    map: {
      title: t("MapDestino.title"),
      subtitle: t("MapDestino.subtitle"),
      text1: t("MapDestino.text1"),
      text2: t("MapDestino.text2"),
    },

    history: {
      title: t("HistoryDestino.title"),
      subtitle: t("HistoryDestino.subtitle"),
      text1: t("HistoryDestino.text1"),
      text2: t("HistoryDestino.text2"),
      text3: t("HistoryDestino.text3"),
    },

    culture: {
      title: t("CultureDestino.title"),
      subtitle: t("CultureDestino.subtitle"),
      text1: t("CultureDestino.text1"),
      text2: t("CultureDestino.text2"),
      text3: t("CultureDestino.text3"),
      subtitle1: t("CultureDestino.subtitle1"),
      subtitle2: t("CultureDestino.subtitle2"),
    },
    nature: {
      title: t("NatureDestino.title"),
      subtitle: t("NatureDestino.subtitle"),
      text1: t("NatureDestino.text1"),
      text2: t("NatureDestino.text2"),
      text3: t("NatureDestino.text3"),
      bubble: t("NatureDestino.bubble"),
   
    }


  };



  return (
    <Section>
      <DestinoSection texts={texts} />
    </Section>
  );
}
