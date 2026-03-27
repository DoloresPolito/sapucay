import styles from "./style.module.scss";

import Image from "next/image";
import image from "../../../../public/images/impacto/sunset.png";

import AnimatedDiv from "../../ui/AnimatedDiv";

export default function Sunset({ sunsettexts }) {
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
                <h2 className={styles.titleh2}>{sunsettexts.title}</h2>
              </AnimatedDiv>
            </div>

            <AnimatedDiv delay={0.5}>
              <h3 className={styles.titleh3}>{sunsettexts.subtitle}</h3>
            </AnimatedDiv>

            <div className={styles.textcontainer}>
              <p className={styles.text}>{sunsettexts.text1}</p>
              <p className={styles.text}>{sunsettexts.text2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
