"use client";
import styles from "./style.module.scss";
// import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./amin";
import Nav from "./Nav";
import { SelectLanguage } from "../../SelectLanguage";
import AnimatedDiv from "../../ui/AnimatedDiv";
import Link from "next/link";

export default function HeaderButton() {
  const [isActive, setIsActive] = useState(false);
  const [isBlurActive, setIsBlurActive] = useState(false);

  // useEffect(() => {
  //   const content = document.getElementById("page-content");

  //   if (isActive) {
  //     const scrollY = window.scrollY;

  //     // blur
  //     content?.classList.add("blur");

  //     // bloquear scroll manteniendo posición
  //     document.body.style.position = "fixed";
  //     document.body.style.top = `-${scrollY}px`;
  //     document.body.style.width = "100%";
  //   } else {
  //     const scrollY = document.body.style.top;

  //     // sacar blur
  //     content?.classList.remove("blur");

  //     // restaurar scroll
  //     document.body.style.position = "";
  //     document.body.style.top = "";
  //     window.scrollTo(0, parseInt(scrollY || "0") * -1);
  //   }
  // }, [isActive]);

  useEffect(() => {
    const content = document.getElementById("page-content");
  
    if (isActive) {
      // activar blur instantáneo
      setIsBlurActive(true);
  
      const scrollY = window.scrollY;
      content?.classList.add("blur");
  
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // 👇 delay para sacar el blur
      const timeout = setTimeout(() => {
        setIsBlurActive(false);
        content?.classList.remove("blur");
  
        const scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }, 600); // 🔥 ajustá este valor a tu animación (ej: 1.2s?)
  
      return () => clearTimeout(timeout);
    }
  }, [isActive]);

  
  return (
    <div
      className={`${styles.header} ${
        isActive ? styles.active : styles.inactive
      }`}
    >
      <div className={styles.bar}>
        <div className={styles.left}>
          <SelectLanguage />
        </div>
        <AnimatedDiv>
          <Link href="/">
            <div className={styles.center}>
              <h1 className={styles.navtitle}>793 TRAVEL EXPERIENCE</h1>
              <h2 className={styles.navtitle}>EDICIÓN LITORAL</h2>
            </div>
          </Link>
        </AnimatedDiv>

        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.right}
        >
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
              className={styles.navtext}
            >
              Menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={isActive ? "open" : "closed"}
              className={styles.navtext}
            >
              Cerrar
            </motion.p>
          </div>
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </div>
      </div>

      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </div>
  );
}
