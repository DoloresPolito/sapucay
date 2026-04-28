"use client";
import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { height } from "../amin";
import Body from "./Body";
import { useTranslations, useLocale } from "next-intl";
import { SelectLanguage } from "@/src/components/SelectLanguage";

export default function Index({ setIsActive }) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const links = [
    { title: t("home"), href: `/${locale}` },
    { title: t("naturaleza"), href: `/${locale}/naturaleza` },
    { title: t("cultura"), href: `/${locale}/cultura` },
    { title: t("bienestar"), href: `/${locale}/bienestar` },
    { title: t("destino"), href: `/${locale}/destino` },
    { title: t("impacto"), href: `/${locale}/impacto` },

  ];

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
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

{isMobile && (
    <div className={styles.languageMobile}>
      <SelectLanguage />
    </div>
  )}
        </div>
      </div>
    </motion.div>
  );
}
