import styles from "./style.module.scss";
import Button from "../ui/Button";
import AnimatedDiv from "../ui/AnimatedDiv";
export default function Description({ title, subtitle, items }) {
  return (
    <div className={styles.description}>
      <div className={styles.top}>
        <div className={styles.titlecontainer}>
          <AnimatedDiv>
            <h2 className={styles.titleh2}>{title}</h2>
          </AnimatedDiv>
        </div>

        <AnimatedDiv delay={0.5}>
          <h3 className={styles.titleh3}> {subtitle}</h3>
        </AnimatedDiv>
      </div>

      <div className={styles.itemscontainer}>
        {items.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className={styles.overlayBase}>
              <div className={styles.toptitle}>
              <h2 className={`${styles.titleh2} ${styles.titleWide}`}>
                {item.title}
              </h2>

              <h3 className={styles.titleh3}>{item.subtitle}</h3>
              </div>
              <p className={styles.text}>{item.text}</p>
              <Button>{item.button}</Button>
            </div>

            <div className={styles.overlayHover}>
              <ul>
                {item.bullets.map((bullet, i) => (
                  <li className={styles.traveldescriptionitembullet} key={i}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
