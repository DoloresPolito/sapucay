import { getTranslations, setRequestLocale } from "next-intl/server";
import Section from "@/src/components/structure/Section";
import HomeSection from "@/src/section/HomeSection";

export default async function HomePage({ params }) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <Section>
      <HomeSection />
    </Section>
  );
}
