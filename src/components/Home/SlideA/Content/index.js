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

      <h2>{item.title}</h2>
      <h3>{item.description}</h3>
      <p>{item.text}</p>

    </motion.div>
  );
}