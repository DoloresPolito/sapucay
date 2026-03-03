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
        <div className={styles.top}>
          <div className={styles.titlecontainer}>

       
          <p className={styles.section1}>{sectiontext1}</p>
          <h2 className={styles.section2}>{sectiontext2}</h2>
          </div>
          <div>
            {sectionitems.map((item, index) => (
              <div key={index} className={styles.item}>
                <div>
                  <p >{item}</p>
                  <div className={styles.line}/>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className={styles.bottom}>
          <div className={styles.container}>
            {sectionbutton.map((item, index) => (
              <div key={index} className={styles.item}>
                <div>
                  <p className={styles.sectionBottomText}>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
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
