"use client";

import Intro from "./Intro";
import Description from "./Description";
import Section from "./Section";

export default function ScrollRevealSection({
  introImage,
  sectionImage,
  texts
}) {
  return (
    <>
      <Intro
        image={introImage}
        herotitle={texts.hero.title}
        herosubtitle={texts.hero.subtitle}
        herobutton={texts.hero.button}
      />
      <Description      
       title={texts.description.title}
        subtitle={texts.description.subtitle} />
      <Section
        image={sectionImage}
        herotitle={texts.hero.title}
        herosubtitle={texts.hero.subtitle}
      />
    </>
  );
}


// const texts = {
//   hero: {
//     title: t("herotitle"),
//     subtitle: t("herosubtitle"),
//     button: t("herobutton"),
//   },
//   description: {
//     title: t("descriptiontitle"),
//     subtitle: t("descriptionsubtitle"),
//   },
//   // podés seguir agregando lo que quieras acá
// };