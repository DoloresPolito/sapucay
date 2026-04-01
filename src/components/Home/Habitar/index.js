import styles from "./style.module.scss";
import Image from "next/image";
import image from "../../../../public/images/home/habitarhome.png";
import AnimatedDiv from "../../ui/AnimatedDiv";

export default function Habitar({ habitartexts }) {
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
                <h2 className={styles.titleh2}>{habitartexts.title1}</h2>
              </AnimatedDiv>
            </div>

            <AnimatedDiv delay={0.5}>
              <h3 className={styles.titleh3}>{habitartexts.title2}</h3>
            </AnimatedDiv>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        {habitartexts.items.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className={styles.overlayBase}>
              <AnimatedDiv>
                <h2 className={`${styles.titleh2} `}>{item.title}</h2>
              </AnimatedDiv>

              <AnimatedDiv>
                <p className={styles.text}>{item.text}</p>
                <div className={styles.bullets}>
  {item.bullets.map((bullet, i) => (
    <span key={i} className={styles.bullet}>
      {bullet}
    </span>
  ))}
</div>
              </AnimatedDiv>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
