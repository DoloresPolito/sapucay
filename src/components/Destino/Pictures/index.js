import styles from "./style.module.scss";

export default function Pictures() {
  // const items = ["history1.png", "history2.png", "history3.png"];
  const items = ["cult1.png", "history1.png", "cult3.png"];

  return (
    <div className={styles.section}>
      <div className={styles.bottom}>
        {items.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ backgroundImage: `url(/images/destino/${item})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
