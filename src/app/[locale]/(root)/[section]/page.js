
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import SectionLayout from "../../../../section/TravelSection";

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
    "/images/bienestar/bienestarsection.png",
    "/images/bienestar/01.png",
    "/images/bienestar/02.png",
    "/images/bienestar/03.png",
    "/images/bienestar/opcion2.png",
  ],
  naturaleza: [
    "/images/naturaleza/naturaleza.png",
    "/images/naturaleza/01.png",
    "/images/naturaleza/02.png",
    "/images/naturaleza/03.png",
    "/images/naturaleza/naturalezasection.png",
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



  const texts = {
    hero: {
      title1: t("herotitle1"),
      title2: t("herotitle2"),
      subtitle: t("herosubtitle"),
      button: t("herobutton"),
      place1: t("heroplace1"),
      place2: t("heroplace2"),
      heroarreglo1:t.raw("heroarreglo1"),
      heroarreglo2:t.raw("heroarreglo2"),



    },
    description: {
      title: t("descriptiontitle"),
      subtitle: t("descriptionsubtitle"),
      items: t.raw("items"),
      items1: t.raw("items1"),
    },
    section: {
      sectiontext1: t("sectiontext1"),
      sectiontext2: t("sectiontext2"),
      sectiontext3: t("sectiontext3"),
      sectiontext4: t("sectiontext4"),
      sectionitems: t.raw("sectionitems"),
      sectionbutton: t.raw("sectionbutton"), 
    },

    table: t.raw("table"),
  };




  return <SectionLayout images={images} texts={texts} />;
}
