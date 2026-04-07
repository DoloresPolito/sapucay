import { motion } from "framer-motion";
import styles from "../style.module.scss";
import Image from "next/image";


export default function Content({ item, isActive }) {
  if (!item) return null;

  return (
    <motion.div
      className={styles.content}
      initial={{ opacity: 0, y: 40 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background image */}
      <div className={styles.bgImage}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Overlay oscuro */}
      <div className={styles.bgOverlay} />

      {/* Contenido */}
      <div className={styles.contentInner}>
        <div className={styles.top}>
          <h2 className={styles.titleh2}>{item.title}</h2>
          <p className={styles.subtitle}>{item.subtitle}</p>
        </div>

        <div className={styles.bottom}>
          {item.items?.map((el, i) => (
            <div key={i} className={styles.feature}>
              <h4>{el.title}</h4>
              <p>{el.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}