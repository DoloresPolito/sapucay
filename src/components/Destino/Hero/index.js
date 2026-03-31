"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import image from "../../../../public/images/destino/destino-hero.png";
import AnimatedDiv from "../../ui/AnimatedDiv";

export default function Hero({ herotexts }) {
  return (
    <div className={styles.herosection}>
      <div className={styles.heroimage}>
        <Image
          src={image}
          fill
          alt=""
          priority
          style={{ objectFit: "cover" }}
        />

        <div className={styles.overlay}>
          <div className={styles.titlecontainer}>
            <AnimatedDiv>
              <h2 className={styles.titleh2}>{herotexts.title1}</h2>
              <h3 className={styles.titleh3}>{herotexts.subtitle}</h3>
            </AnimatedDiv>
          </div>

  

          <div>
            <p className={styles.text}> {herotexts.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
