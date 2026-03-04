
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import SectionLayout from "../../../../components/TravelSectionLayout";

const VALID_SECTIONS = ["cultura", "bienestar", "naturaleza"];

const IMAGES = {
  cultura: [
    "/images/cultura/culturahero.png",
    "/images/cultura/01.png",
    "/images/cultura/02.png",
    "/images/cultura/03.png",
    "/images/cultura/culturasection.png",
  ],
  bienestar: [
    "/images/cultura/culturahero.png",
    "/images/bienestar/01.png",
    "/images/bienestar/02.png",
    "/images/bienestar/03.png",
    "/images/cultura/culturasection.png",
  ],
  naturaleza: [
    "/images/cultura/culturahero.png",
    "/images/cultura/01.png",
    "/images/cultura/02.png",
    "/images/cultura/03.png",
    "/images/cultura/culturasection.png",
  ],
};

export default async function SectionPage({ params }) {
  const { section } = await params; // 👈 CLAVE

  const images = IMAGES[section];
  if (!images) notFound();

  // validamos que el param exista
  if (!VALID_SECTIONS.includes(section)) notFound();

  // usamos el param directamente como namespace
  const t = await getTranslations(section);

console.log("t", t)

  const texts = {
    hero: {
      title: t("herotitle"),
      subtitle: t("herosubtitle"),
      button: t("herobutton"),
    },
    description: {
      title: t("descriptiontitle"),
      subtitle: t("descriptionsubtitle"),
      items: t.raw("items"),
    },
    section: {
      sectiontext1: t("sectiontext1"),
      sectiontext2: t("sectiontext2"),
      sectionitems: t.raw("sectionitems"),
      sectionbutton: t.raw("sectionbutton"), 
    },

    // table: {
    //   title: t("title"),
    //   subtitle: t("subtitle"),
    //   columns: t.raw("columns"),
    //   rows: t.raw("rows"),
     
    // },
  };

  return <SectionLayout images={images} texts={texts} />;
}
