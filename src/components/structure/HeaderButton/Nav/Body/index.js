import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";

const underline = {
  initial: { width: 0 },
  hover: { width: "100%", transition: { duration: 0.5, ease: "easeInOut" } },
};

export const translate = {
  initial: {
    y: "100%",  // Parte desde abajo
    opacity: 0,
  },
  enter: (index) => ({
    y: 0,  // Llega a su posición original
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: index * 0.03, // Delay para cada letra basado en el índice
    },
  }),
  exit: (index) => ({
    y: "50%",  // Vuelve a salir hacia abajo
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
      delay: index * 0.03,
    },
  }),
};



export default function Body({ links, selectedLink, setSelectedLink, setIsActive }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 750);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getChars = (word) => {
    if (isSmallScreen) {
      return word;  // Para pantallas pequeñas, mostramos todo el texto sin animación
    } else {
      return word.split("").map((char, i) => (
        <motion.span
          custom={i}  // Pasamos el índice para controlar el delay en la animación
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
          style={{ display: "inline-block" }}  // Asegura que cada letra esté en su propia línea verticalmente
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ));
    }
  };

  const handleMenuClose = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link key={`l_${index}`} href={href}>
            <motion.p
              onMouseOver={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => setSelectedLink({ isActive: false, index })}
              onClick={() => handleMenuClose()}
              className={`${styles.navlink} ${
                selectedLink.isActive && selectedLink.index === index ? styles.active : ""
              }`}
            >
              <span className={styles.textContainer}>
                {getChars(title)}
                <motion.span
                  className={styles.underline}
                  variants={underline}
                  initial="initial"
                  animate={selectedLink.isActive && selectedLink.index === index ? "hover" : "initial"}
                />
              </span>
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}