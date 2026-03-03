"use client";
import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { height } from "../amin";
import Body from "./Body";
import { useTranslations, useLocale } from "next-intl";


export default function Index({ setIsActive }) {


  const t = useTranslations("nav");
  const locale = useLocale();
  const links = [
    { title: t("home"), href: `/${locale}` },
    { title: t("cultura"), href: `/${locale}/cultura` },
    { title: t("bienestar"), href: `/${locale}/bienestar` },
    { title: t("naturaleza"), href: `/${locale}/naturaleza` },
    { title: t("impacto"), href: `/${locale}/impacto` },
    { title: t("destino"), href: `/${locale}/destino` },
  ];

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 750);
  //   };

  //   handleResize(); // Set initial value
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

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