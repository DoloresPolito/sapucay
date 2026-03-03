"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./style.module.scss";

export default function Section({ image, title, text }) {
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
        <p className={styles.text}>{text}</p>
        <h2 className={styles.title}>{title}</h2>
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
