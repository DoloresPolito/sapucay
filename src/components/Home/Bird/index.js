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
      style={{ y }}
       className={styles.background}>
        <Image src={image} alt="background" fill priority />
      </motion.div>

      <div className={styles.content}>

        <div >
          <h2 className={styles.titleh2}>{birdtexts.title}</h2>
          <h3 className={styles.titleh3}>{birdtexts.subtitle}</h3>

          {/* <div className={styles.personalbutton}>{birdtexts.button}</div> */}
        </div>

        <div>
          <h2 className={styles.titleh2}>{birdtexts.title2}</h2>
          <p className={styles.text}>{birdtexts.text21}</p>
          <p className={styles.text}>{birdtexts.text22}</p>

          <div>
            <Button>{birdtexts.button2}</Button>
          </div>
        </div>

        <div>
          <h2 className={styles.titleh2}>{birdtexts.title3}</h2>
          <h3 className={styles.titleh3}>{birdtexts.subtitle3}</h3>
          <p className={styles.text}>{birdtexts.text3}</p>
          <div>
            <Button>{birdtexts.button3}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
