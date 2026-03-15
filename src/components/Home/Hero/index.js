"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import image from "../../../../public/images/home/herohome.png";
import Button from "@/src/components/ui/Button";
import Link from "next/link";
import { useLocale } from "next-intl";
import AnimatedDiv from "../../ui/AnimatedDiv";

export default function Hero({ herotexts }) {
  const locale = useLocale();
  const links = ["/naturaleza", "/cultura", "/bienestar"];


  const scrollToNext = () => {
    const section = document.getElementById("slideA");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.herosection}>
      <div className={styles.heroimage}>
        <Image
          src={image}
          fill
          alt=""
          priority
          style={{ objectFit: "cover"}}
        />

        <div className={styles.overlay}>
          <div className={styles.titlecontainer}>
            <AnimatedDiv>
              <h2 className={styles.titleh2}>{herotexts.title1}</h2>
              <h2 className={`${styles.titleh2} ${styles.titleWide}`}>
                {herotexts.title2}
              </h2>
            </AnimatedDiv>
          </div>

          <AnimatedDiv delay={0.5}>
            <h3 className={styles.titleh3}>{herotexts.subtitle}</h3>
          </AnimatedDiv>

          <div>
            <Button onClick={scrollToNext}>{herotexts.button}</Button>
          </div>
        </div>

        <div className={styles.bottomGrid}>
          {herotexts.options.map((type, i) => (
            <Link
              key={i}
              href={`/${locale}/${links[i]}`}
              className={styles.gridItem}
            >
              <p className={styles.text}>{type.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
