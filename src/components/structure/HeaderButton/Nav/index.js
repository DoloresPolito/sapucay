"use client";
import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { height } from "../amin";
import Body from "./Body";

import { useTranslations } from "next-intl";




export default function Index({ setIsActive }) {


  const t = useTranslations("nav");

  const links = [
    { title: t("home"), href: "/" },
    { title: t("cultura"), href: "/cultura" },
    { title: t("bienestar"), href: "/bienestar" },
    { title: t("naturaleza"), href: "/naturaleza" },
    { title: t("impacto"), href: "/impacto" },
    { title: t("destino"), href: "/destino" },
  ];


  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 750);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setIsActive={setIsActive}
          />
        </div>
      
      </div>


    </motion.div>
  );
}