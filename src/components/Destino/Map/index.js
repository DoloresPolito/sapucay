"use client";
import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";
import image from "../../../../public/images/destino/destinomap.png";
import AnimatedDiv from "../../ui/AnimatedDiv";

export default function Map({ maptexts }) {
  const container = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  // Define y transform but control its value based on screen size
  const yTransform = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const y = isMobile ? "0vh" : yTransform;

  return (
    <div ref={container} className={styles.section} id="slideA">
      <motion.div style={{ y }} className={styles.motionDiv}>
        <div className={styles.heroimage}>
          <Image
            src={image}
            fill
            alt=""
            priority
            style={{ objectFit: "cover" }}
          />

          <div className={styles.overlay}>
            <div className={styles.container}>
              <AnimatedDiv>
                <div className={styles.header}>
                  <div className={styles.titlecontainer}>
                    <h2 className={styles.titleh2}>{maptexts.title}</h2>
                  </div>

                  <h3 className={styles.titleh3}>{maptexts.subtitle}</h3>
                </div>
                <div>
                  <p className={styles.text}>{maptexts.text1}</p>
                  <p className={styles.text}>{maptexts.text2}</p>
                </div>


              </AnimatedDiv>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

