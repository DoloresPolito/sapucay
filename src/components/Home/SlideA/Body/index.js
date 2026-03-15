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
          <h3 className={styles.titleh3}>
          {item.title}
          </h3>
     
        </div>
      ))}
    </div>
  );
}