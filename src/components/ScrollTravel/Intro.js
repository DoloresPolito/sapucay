"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styles from "./style.module.scss";
import Button from "../ui/Button";
import AnimatedDiv from "../ui/AnimatedDiv";

export default function Intro({
  image,
  herotitle1,
  herotitle2,
  herosubtitle,
  herobutton,
  heroplace1,
  heroplace2,
  heroarreglo1,
  heroarreglo2,
}) {
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
      <motion.div style={!isMobile ? { y } : {}} className={styles.introImage}>
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
              <h2 className={styles.titleh2}>{herotitle1}</h2>
            </AnimatedDiv>
            <AnimatedDiv delay={0.2}>
              <h2 className={`${styles.titleh2} ${styles.titleWide}`}>
                {herotitle2}
              </h2>
            </AnimatedDiv>
          </div>

          <AnimatedDiv delay={0.5}>
            <h3 className={styles.titleh3}>{herosubtitle}</h3>
          </AnimatedDiv>
          <div className={styles.placecontainer}>
            <div className={styles.top}>
              {heroarreglo1.map((place, i) => {
                return (
                  <h3 key={i} className={styles.titleh3} >
                    {place}
                  </h3>
                );
              })}
            </div>
            <div className={styles.bottom}>
              {heroarreglo2.map((place, i) => {
                return (
                  <h3 className={styles.titleh3} index={i}>
                    {place}
                  </h3>
                );
              })}
            </div>
          </div>

          {/* <div>
            <Button>Conocé los niveles</Button>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
}
