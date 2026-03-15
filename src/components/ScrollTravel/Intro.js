"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./style.module.scss";
import Button from "../ui/Button";
// import Link from "next/link";
import AnimatedDiv from "../ui/AnimatedDiv";

export default function Intro({ image, herotitle, herosubtitle, herobutton }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <div ref={container} className={styles.intro}>
      <motion.div style={{ y }} className={styles.introImage}>
        <Image
          src={image}
          fill
          alt=""
          priority
          style={{ objectFit: "cover" }}
        />

        {/* Overlay de texto */}
        <div className={styles.overlay}>
          <div className={styles.left}>
            <div className={styles.titlecontainer}>
              <AnimatedDiv>
                <h2 className={`${styles.titleh2} ${styles.titleWide}`}>
                  {herotitle}
                </h2>
                <h2 className={styles.titleh2}>{herosubtitle}</h2>
              </AnimatedDiv>
            </div>

            <div>
              {/* <Link to="contact" smooth={true} offset={-5} duration={1000}> */}
              <Button>{herobutton}</Button>
              {/* </Link> */}
            </div>
          </div>

          <div className={styles.right}>
            <p className={styles.titleh2}>Mercedes</p>
            <p className={styles.titleh2}>Esteros del Iberá</p>
            <p className={styles.titleh2}>Corrientes - Argentina</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
