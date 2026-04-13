"use client";

import Image from "next/image";
import styles from "./style.module.scss";
import image from "../../../../public/images/impacto/tree.png";

export default function Sky({ skytexts }) {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image src={image} alt="background" fill priority />
      </div>

      <div className={styles.content}>
        <div className={styles.titlecontainer}>
          <h2 className={styles.titleh2}>{skytexts.title}</h2>
          <h3 className={styles.titleh3}>{skytexts.subtitle}</h3>
        </div>

        <div className={styles.cardscontainer}>
          {skytexts.options.map((option, i) => (
            <div key={i} className={styles.card}>
              <h2 className={styles.titleh2}>{option.title}</h2>

              <div className={styles.line} />

              <ul className={styles.list}>
                {option.items.map((item, idx) => (
                  <li key={idx} className={styles.text}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottomcontainer}>
          <h4 className={styles.text}>{skytexts.text3}</h4>
          <h4 className={styles.text}>{skytexts.text4}</h4>
        </div>
      </div>
    </section>
  );
}
