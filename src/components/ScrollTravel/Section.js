"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./style.module.scss";

export default function Section({
  image,
  sectiontext1,
  sectiontext2,
  sectionitems,
  sectionbutton,
}) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className={styles.section}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className={styles.content}>
        <div className={styles.topsection}>
          <div className={styles.titlecontainer}>
            {/* <p className={styles.section1}>{sectiontext1}</p>
            <h2 className={styles.section2}>{sectiontext2}</h2> */}

            <h2 className={styles.titleh2}>El verdadero lujo</h2>
            <h2 className={styles.titleh2}>no es hacer más.</h2>
            <h2 className={`${styles.titleh2} ${styles.titleWide}`}>
            Es volver al
                </h2>
                <h2 className={`${styles.titleh2} ${styles.titleWide}`}>
                ritmo natural.
                </h2>

          </div>

          <div className={styles.middle}>
            <p></p>
          </div>

          <div className={styles.itemscontainer}>
            {sectionitems.map((item, index) => (
              <div key={index} className={styles.itemcontainer}>
                <div>
                <p className={`${styles.text} ${styles.itemWide}`}>
                  {item}</p>
               
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.container}>
            {sectionbutton.map((item, index) => (
              <div key={index} className={styles.itemsection}>
                <div>
                  <p className={styles.text}>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.background}>
        <motion.div style={{ y }} className={styles.backgroundInner}>
          {image ? (
            <Image src={image} fill alt="" style={{ objectFit: "cover" }} />
          ) : null}
        </motion.div>
      </div>
    </div>
  );
}
