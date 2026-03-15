import styles from "./style.module.scss";
import Image from "next/image";
import image from "../../../../public/images/home/plants.png";
import Button from "../../ui/Button";
import AnimatedDiv from "../../ui/AnimatedDiv";

export default function Levels({ levelstexts }) {
  return (
    <div className={styles.section}>
      <div className={styles.top}>
        <div className={styles.heroimage}>
          <Image
            src={image}
            fill
            alt=""
            priority
            style={{ objectFit: "cover" }}
          />

          <div className={styles.overlay}>
            <div className={styles.titlecontainer}>
              <AnimatedDiv>
                <h2 className={styles.titleh2}>{levelstexts.title1}</h2>
                <h2 className={`${styles.titleh2} ${styles.titleWide}`}>
                  {levelstexts.title2}
                </h2>
              </AnimatedDiv>
            </div>

            <AnimatedDiv delay={0.5}>
              <h3 className={styles.titleh3}>{levelstexts.subtitle}</h3>
            </AnimatedDiv>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        {levelstexts.items.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className={styles.overlayBase}>
              <h2 className={`${styles.titleh2} ${styles.titleWide}`}>
                {item.title}
              </h2>

              <p className={styles.text}>{item.text}</p>

              <Button>{levelstexts.button}</Button>
            </div>

            <div className={styles.overlayHover}>
              <ul>
                {item.bullets.map((bullet, i) => (
                  <li key={i} className={styles.text}>
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
