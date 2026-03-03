import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import SectionLayout from "../../../../components/SectionLayout";

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
    "/images/cultura/01.png",
    "/images/cultura/02.png",
    "/images/cultura/03.png",
  ],
  naturaleza: [
    "/images/cultura/culturahero.png",
    "/images/cultura/01.png",
    "/images/cultura/02.png",
    "/images/cultura/03.png",
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
      title: t("herotitle"),
      subtitle: t("herosubtitle"),
      button: t("herobutton"),
    },
    description: {
      title: t("descriptiontitle"),
      subtitle: t("descriptionsubtitle"),
    },
    // podés seguir agregando lo que quieras acá
  };

  return <SectionLayout images={images} texts={texts} />;
}
