"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styles from "./style.module.scss";
import Button from "../ui/Button";
import AnimatedDiv from "../ui/AnimatedDiv";

export default function Intro({ image, herotitle, herosubtitle, herobutton }) {
  const container = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <div ref={container} className={styles.intro}>
      <motion.div
        style={!isMobile ? { y } : {}}
        className={styles.introImage}
      >
        <Image
          src={image}
          fill
          alt=""
          priority
          style={{ objectFit: "cover" }}
        />

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
              <Button>{herobutton}</Button>
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