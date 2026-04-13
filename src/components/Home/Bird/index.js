"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";
import image from "../../../../public/images/home/pajaro.png";
import Button from "../../ui/Button";

export default function Bird({ birdtexts }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={sectionRef} className={styles.section}>
      <motion.div
        // style={{ y }}
        className={styles.background}
      >
        <Image src={image} alt="background" fill priority />
      </motion.div>

      <div className={styles.content}>
        <div>
          <h2 className={styles.titleh2}>{birdtexts.title3}</h2>
          <h3 className={styles.titleh3}>{birdtexts.subtitle3}</h3>
          <h4 className={styles.titleh3}>{birdtexts.text3}</h4>

          <div className={styles.itemscontainer}>
            <div className={styles.item}>
              <div className={styles.icon}>›</div>
              <p className={styles.text}>{birdtexts.impact1}</p>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>›</div>
              <p className={styles.text}>{birdtexts.impact2}</p>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>›</div>
              <p className={styles.text}>{birdtexts.impact3}</p>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>›</div>
              <p className={styles.text}>{birdtexts.impact4}</p>
            </div>
          </div>

          <div>
            <Button href="/impacto">{birdtexts.button3}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
