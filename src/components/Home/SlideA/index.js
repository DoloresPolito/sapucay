"use client"
import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";
// import AnimatedDiv from "@/components/AnimatedDiv";
import image1 from "../../../../public/images/home/home1.png";

export default function SlideA() {
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
        <div className={styles.container}>
          {/* <AnimatedDiv> */}
            <h3>
           teeeeeexto
            </h3>
          {/* </AnimatedDiv> */}
          {/* <AnimatedDiv delay={0.3}> */}
            <div className={styles.imagecontainer}>
              <Image src={image1} alt="about" />
            </div>
          {/* </AnimatedDiv> */}
        </div>
      </motion.div>
    </div>
  );
}