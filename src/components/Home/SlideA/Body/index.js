import { motion } from "framer-motion";
import styles from "../style.module.scss";

export default function Body({ items, selectedLink, setSelectedLink }) {


  return (
    <div className={styles.body}>
      {items.map((item, index) => (
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
          {item.title}
        </motion.p>
      ))}
    </div>
  );
}