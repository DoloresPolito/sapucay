import styles from "./style.module.scss";

export default function Levels({ levelstexts }) {
  return (
    <div className={styles.section}>
      <div className={styles.bottom}>
        {levelstexts.items.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className={styles.overlayBase}>
              <h2 className={`${styles.titleh2} `}>{item.title}</h2>
              <div className={styles.subtitleRow}>
                {item.subtitle.map((word, i) => (
                  <span key={i} className={styles.text}>
                    {word}
                    {i < item.subtitle.length - 1 && (
                      <span className={styles.separator}> | </span>
                    )}
                  </span>
                ))}
              </div>

              <p className={styles.text}>{item.text1}</p>
              <div className={styles.bulletscontainer}>
                {item.bullets.map((bullet, i) => (
                  <div key={i}>
                    <p className={styles.text}>{bullet}</p>
                  </div>
                ))}
              </div>
              {/* <p className={styles.text}>{item.text2}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
