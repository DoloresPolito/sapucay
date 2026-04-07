"use client";
import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";
import image from "../../../../public/images/home/home1.png";

import AnimatedDiv from "../../ui/AnimatedDiv";

export default function LevelsNew({ typestexts }) {
  const items = typestexts?.types ?? [];
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
                    <h2 className={styles.titleh2}>{typestexts.title1}</h2>
                    <h2 className={`${styles.titleh2} ${styles.titleWide}`}>
                      {typestexts.title2}
                    </h2>
                  </div>

                  <h3 className={styles.titleh3}>{typestexts.subtitle}</h3>
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
                  <div className={styles.left}>
                    {/* <h2 className={styles.titleh2}>{item.title}</h2> */}
                  </div>

                  <div className={styles.right}>
                    {/* <p className={styles.text}>{item.level1}</p>
        <p className={styles.text}>{item.level2}</p>
        <p className={styles.text}>{item.level3}</p> */}
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
