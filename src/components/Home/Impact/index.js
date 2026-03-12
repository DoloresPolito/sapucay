"use client";

import styles from "./style.module.scss";

const items = [
  {
    key: "impact1",
    image: "/images/home/impacto1.png",
  },
  {
    key: "impact2",
    image: "/images/home/impacto2.png",
  },
  {
    key: "impact3",
    image: "/images/home/impacto3.png",
  },
  {
    key: "impact4",
    image: "/images/home/impacto4.png",
  },
];

export default function Impact({ impacttexts }) {

  return (
    <section className={styles.section}>
      {items.map((item, i) => (
        <div
          key={i}
          className={styles.item}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className={styles.overlay} />

          <div className={styles.text}>
            <p>{impacttexts[item.key]}</p>
            <span className={styles.underline} />
          </div>
        </div>
      ))}
    </section>
  );
}