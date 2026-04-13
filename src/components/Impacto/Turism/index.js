"use client";
import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";
import image from "../../../../public/images/bienestar/bienestarhero1.png";
import AnimatedDiv from "../../ui/AnimatedDiv";

export default function Turism({ turismtexts }) {
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
  const yTransform = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);
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
                    <h2 className={styles.titleh2}>{turismtexts.title}</h2>
                  </div>

                  <h3 className={styles.titleh3}>{turismtexts.subtitle}</h3>
                </div>
                <div className={styles.textcontainer}>
                  <p className={styles.text}>{turismtexts.text1}</p>
                  <p className={styles.text}>{turismtexts.text2}</p>
                </div>

                <div className={styles.itemscontainer}>
                  {turismtexts.options.map((option, i) => {
                    return <Item key={i} option={option} />;
                  })}
                </div>

                <div className={styles.textcontainer}>
                  <p className={styles.text}>{turismtexts.text3}</p>
                  <p className={styles.text}>{turismtexts.text4}</p>
                </div>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Item({ option }) {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>›</div>
      <p className={styles.text}>{option.title}</p>
    </div>

    
  );
}