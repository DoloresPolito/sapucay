"use client";
import styles from "./style.module.scss";
// import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./animation";
import Nav from "./Nav";
import { SelectLanguage } from "../../SelectLanguage";
export default function Header() {
  const [isActive, setIsActive] = useState(false);


  return (
    <div className={styles.header}>
      
      <div className={styles.bar}>
        <div>
          {" "}
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.el}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
            <div className={styles.label}>
              <motion.p
                variants={opacity}
                animate={!isActive ? "open" : "closed"}
              >
                Menu
              </motion.p>
              <motion.p
                variants={opacity}
                animate={isActive ? "open" : "closed"}
              >
                Close
              </motion.p>
            </div>
          </div>
        </div>
        <div className={styles.item1}>
          <div className={styles.logo}>
            <div className={styles.name}>
              <h2 className={styles.navtitle}>SAPUCAY TRAVEL</h2>
              {/* <p className={styles.codeBy}>SAPUCAY</p>
              <p className={styles.dennis}>TRAVEL</p>
              <p className={styles.snellenberg}>SAPUCAY </p>
              <p className={styles.snellenberg2}> TRAVEL</p> */}
            </div>
          </div>

        </div>

        <div className={styles.item2}>
        <SelectLanguage/>
        </div>


        {/* <motion.div className={styles.hoverText} whileHover="hover">
      Hover over this text
      <motion.div className={styles.underline} variants={underlineVariants} />
    </motion.div> */}

        <div>
          {/* <div className={styles.navcontainerdesktop}>
            {navdesktop.map((link, i) => {
              return (
                <>
                 

                  <Link
                    key={i}
                    to={link.href}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                  >
                    <motion.div className={styles.navitem} whileHover="hover">
                      <p class="styled-paragraph">
                        <span class="highlighted">{link.id} </span> {link.title}
                      </p>
                      <motion.div
                        className={styles.underline}
                        variants={underlineVariants}
                      />
                    </motion.div>
                  </Link>
                  <div>
                    {" "}
                    <p>/</p>
                  </div>
                </>
              );
            })}
          </div> */}
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
