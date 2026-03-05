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
        herotitle={texts.hero.title}
        herosubtitle={texts.hero.subtitle}
        herobutton={texts.hero.button}
      />
      <Description
        title={texts.description.title}
        subtitle={texts.description.subtitle}
        items={texts.description.items} // 👈 acá
      />
      <Section
        image={sectionImage}
        sectiontext1={texts.section.sectiontext1}
        sectiontext2={texts.section.sectiontext2}
        sectionitems={texts.section.sectionitems}
        sectionbutton={texts.section.sectionbutton}
      />
      <ComparativeTable
        backgroundImage="/images/background-table.png"
        // title={texts.table.title}
        // subtitle={texts.table}
        // columns={texts.table.columns}
        // rows={texts.table.rows}
      />
    </>
  );
}
