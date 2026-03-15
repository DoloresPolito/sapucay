"use client";
import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";
import image from "../../../../public/images/home/home1.png";
import Body from "./Body";
import Content from "./Content";
import AnimatedDiv from "../../ui/AnimatedDiv";
export default function SlideA({ typestexts }) {
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
                  <h2 className={`${styles.titleh2} ${styles.titleWide}`}>{typestexts.title2}</h2>
                  </div>
             

                  <h3 className={styles.titleh3}>{typestexts.subtitle}</h3>
                </div>
              </AnimatedDiv>
              <div className={styles.columns}>
                <Body
                  items={items}
                  selectedLink={selectedLink}
                  setSelectedLink={setSelectedLink}
                />

                <Content
                  item={items[selectedLink.index]}
                  isActive={selectedLink.isActive}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
