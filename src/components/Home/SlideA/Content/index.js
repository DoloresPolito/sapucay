import { motion } from "framer-motion";
import styles from "../style.module.scss";

export default function Content({ item, isActive }) {
  return (
    <motion.div
      className={styles.content}
      initial={{ opacity: 0, y: 40 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.left}>
        <h2>{item.title}</h2>
        <h3>{item.subtitle}</h3>
      </div>

      <div className={styles.right}>
        <p>{item.level1}</p>
        <p>{item.level2}</p>
        <p>{item.level3}</p>
      </div>
    </motion.div>
  );
}
