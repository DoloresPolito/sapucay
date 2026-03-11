import { motion } from "framer-motion";
import styles from "../style.module.scss";

export default function Body({ items, selectedLink, setSelectedLink }) {

  const getChars = (word) => {
    let chars = [];

    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          key={char + i}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ delay: i * 0.03 }}
        >
          {char}
        </motion.span>
      );
    });

    return chars;
  };

  return (
    <div className={styles.body}>
      {items.map((item, index) => {

        return (
          <motion.p
            key={index}
            onMouseOver={() => setSelectedLink({ isActive: true, index })}
            onMouseLeave={() => setSelectedLink({ isActive: false, index })}
            animate={
              selectedLink.isActive && selectedLink.index !== index
                ? { filter: "blur(4px)", opacity: 0.3 }
                : { filter: "blur(0px)", opacity: 1 }
            }
          >
            {getChars(item.title)}
          </motion.p>
        );

      })}
    </div>
  );
}