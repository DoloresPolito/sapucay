"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import image from "../../../../public/images/impacto/regen3.png";

import AnimatedDiv from "../../ui/AnimatedDiv";
import Button from "../../ui/Button";
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
              <h2 className={styles.titleh2}> {herotexts.title1}</h2>
            </AnimatedDiv>

            <AnimatedDiv delay={0.2}>
              <h2 className={`${styles.titleh2} ${styles.titleWide}`}>
                {herotexts.title2}
              </h2>
            </AnimatedDiv>
          </div>

          <AnimatedDiv delay={0.5}>
            <h3 className={styles.titleh3}> {herotexts.text1}</h3>
          </AnimatedDiv>
          {/* <AnimatedDiv delay={0.5}>
            <h3 className={styles.titleh3}> {herotexts.text2}</h3>
          </AnimatedDiv> */}

          {/* <div>
            <Button
            // onClick={scrollToNext}
            >
              Historia
            </Button>
            <Button
            // onClick={scrollToNext}
            >
              Cultura
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
