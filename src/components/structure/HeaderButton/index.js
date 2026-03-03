"use client";
import styles from "./style.module.scss";
// import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./amin";
import Nav from "./Nav";
import { SelectLanguage } from "../../SelectLanguage";

export default function HeaderButton() {
  const [isActive, setIsActive] = useState(false);

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

        <div className={styles.center}>
          <p className={styles.navtitle}>SAPUCAY TRAVEL</p>
        </div>

        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
              className={styles.navtext}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}   className={styles.navtextblack}>
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
