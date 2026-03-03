"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./style.module.scss";
import Button from "../Button";
import Link from "next/link";

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
            <h1 className={styles.traveltitle}>{herotitle}</h1>
            <p className={styles.travelsubtitle}>
            {herosubtitle}
            </p>
            {/* <button>Conocer más</button> */}

            {/* <Link to="contact" smooth={true} offset={-5} duration={1000}> */}
              <Button>{herobutton}</Button>
            {/* </Link> */}
          </div>

          <div className={styles.right}>
            <p>Mercedes</p>
            <p>Esteros del Iberá</p>
            <p>Corrientes - Argentina</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
