"use client";
import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";
import image from "../../../../public/images/home/caballo.png";

import AnimatedDiv from "../../ui/AnimatedDiv";

export default function LevelsNew({ levelstexts }) {
  const items = levelstexts?.items ?? [];
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

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
                    <h2 className={styles.titleh2}>{levelstexts.title1}</h2>
                    <h2 className={`${styles.titleh2} ${styles.titleWide}`}>
                      {levelstexts.title2}
                    </h2>
                  </div>

                  <h3 className={styles.titleh3}>{levelstexts.subtitle}</h3>
                </div>
              </AnimatedDiv>
              <div className={styles.columns}>
                <div className={styles.body}>
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className={`${styles.item} ${
                        selectedLink.index === index ? styles.active : ""
                      }`}
                      onMouseEnter={() =>
                        setSelectedLink({ isActive: true, index })
                      }
                    >
                      <h3 className={styles.titleh3}>{item.title}</h3>
                    </div>
                  ))}
                </div>

                <motion.div
                  className={styles.content}
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    selectedLink.isActive
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0.6, y: 0 }
                  }
                  transition={{ duration: 0.4 }}
                >
                  <div className={styles.bgOverlay} />

                  <div className={styles.contentInner}>
                    <div className={styles.top}>
                      <p> {items[selectedLink.index].text}</p>
                    </div>

                    <div className={styles.bottom}>
  {items[selectedLink.index].bullets.map((el, i) => (
    <div key={i} className={styles.feature}>
      <p>{el}</p>
    </div>
  ))}
</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
