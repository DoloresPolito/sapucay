import styles from "./style.module.scss";

import Image from "next/image";
import image from "../../../../public/images/destino/culture.png";

import AnimatedDiv from "../../ui/AnimatedDiv";

export default function Culture({ culturetexts }) {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
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
                <h2 className={styles.titleh2}>{culturetexts.title}</h2>
              </AnimatedDiv>
            </div>

            <AnimatedDiv delay={0.5}>
              <h3 className={styles.titleh3}>{culturetexts.subtitle}</h3>
            </AnimatedDiv>

            <div className={styles.textcontainer}>
              <p className={styles.text}>{culturetexts.text1}</p>
              <p className={styles.text}>{culturetexts.text2}</p>
              <p className={styles.text}>{culturetexts.text3}</p>
            </div>

            <AnimatedDiv delay={0.5}>
              <h3 className={styles.titleh3}>{culturetexts.subtitle1}</h3>
              <h3 className={styles.titleh3}>{culturetexts.subtitle2}</h3>
            </AnimatedDiv>


          </div>
        </div>
      </div>
    </div>
  );
}
