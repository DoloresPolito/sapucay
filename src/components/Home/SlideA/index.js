"use client";
import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";
// import AnimatedDiv from "@/components/AnimatedDiv";
import image from "../../../../public/images/home/home1.png";
import Body from "./Body";
import Content from "./Content";
export default function SlideA({ typestexts }) {
  // const items = [
  //   {
  //     title: "Exploration",
  //     description: "Discover the territory",
  //     text: "Travel through landscapes that are part of an ecological regeneration process.",
  //   },
  //   {
  //     title: "Culture",
  //     description: "Local traditions",
  //     text: "Experience the identity of Iberá through its people and traditions.",
  //   },
  //   {
  //     title: "Nature",
  //     description: "Biodiversity",
  //     text: "Observe wildlife and ecosystems restored through conservation.",
  //   },
  //   {
  //     title: "Impact",
  //     description: "Positive footprint",
  //     text: "Every visit contributes to the regeneration of the territory.",
  //   },
  // ];

  // const items = typestexts.types;

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
    <div ref={container} className={styles.section}>
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
              <div className={styles.header}>
                <h2 className={styles.titleh2}>{typestexts.title}</h2>

                <p className={styles.text}>{typestexts.subtitle}</p>
              </div>

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
