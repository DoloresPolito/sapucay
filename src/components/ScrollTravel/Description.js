import styles from "./style.module.scss";
import Button from "../ui/Button";
import AnimatedDiv from "../ui/AnimatedDiv";
export default function Description({ title, subtitle, items1 }) {
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
        {/* {items.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className={styles.overlayBase}>
              <div className={styles.toptitle}>
                <AnimatedDiv>
                  <h2 className={`${styles.titleh2} ${styles.titleWide}`}>
                    {item.title}
                  </h2>
                </AnimatedDiv>
                <AnimatedDiv delay={0.2}>
                  <h3 className={styles.titleh3}>{item.subtitle}</h3>
                </AnimatedDiv>
              </div>
              <p className={styles.text}>{item.text}</p>
              <Button>{item.button}</Button>
            </div>

            

           <div className={styles.overlayHover}>
              <ul>
                {item.bullets.map((bullet, i) => (
                  <li className={styles.text} key={i}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div> 
          </div>
        ))} */}

        {items1.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className={styles.overlayBase}>
              <h2 className={`${styles.titleh2} `}>{item.title}</h2>
              <p className={styles.text}>{item.title2}</p>
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
