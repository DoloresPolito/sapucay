"use client";

import Intro from "./Intro";
import Description from "./Description";
import Section from "./Section";
import ComparativeTable from "../ComparativeTable";

export default function ScrollRevealSection({
  introImage,
  sectionImage,
  texts,
}) {
  return (
    <>
      <Intro
        image={introImage}
        herotitle1={texts.hero.title1}
        herotitle2={texts.hero.title2}
        herosubtitle={texts.hero.subtitle}
        herobutton={texts.hero.button}
      />
      <Description
        title={texts.description.title}
        subtitle={texts.description.subtitle}
        items={texts.description.items} // 👈 acá
        items1={texts.description.items1} // 👈 acá
      />
      <Section
        image={sectionImage}
        sectiontext1={texts.section.sectiontext1}
        sectiontext2={texts.section.sectiontext2}
        sectiontext3={texts.section.sectiontext3}
        sectiontext4={texts.section.sectiontext4}
        sectionitems={texts.section.sectionitems}
        sectionbutton={texts.section.sectionbutton}
      />
      <ComparativeTable
        backgroundImage="/images/background-table.png"
        tabletext={texts.table}
      />
    </>
  );
}
