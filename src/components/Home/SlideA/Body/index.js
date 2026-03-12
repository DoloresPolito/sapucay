import styles from "../style.module.scss";

export default function Body({ items, selectedLink, setSelectedLink }) {
  return (
    <div className={styles.body}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${
            selectedLink.index === index ? styles.active : ""
          }`}
          onMouseEnter={() => setSelectedLink({ isActive: true, index })}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}