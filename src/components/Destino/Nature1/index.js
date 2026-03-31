import styles from "./style.module.scss";

import Image from "next/image";
import image from "../../../../public/images/destino/nature1.png";

import AnimatedDiv from "../../ui/AnimatedDiv";

export default function Nature1({ naturetexts }) {
  const images = [
    "natureitem1.png",
    "natureitem2.png",
    "natureitem3.png",
    "natureitem4.png",
  ];
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
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
                  <h2 className={styles.titleh2}>{naturetexts.title}</h2>
                </AnimatedDiv>
                <AnimatedDiv delay={0.5}>
                <h3 className={styles.titleh3}>{naturetexts.subtitle}</h3>
              </AnimatedDiv>
              </div>

        

              <div className={styles.textcontainer}>
                <p className={styles.text}>{naturetexts.text1}</p>
                <p className={styles.text}>{naturetexts.text2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GRID SEPARADA */}
      <div className={styles.gridSection}>
        <div className={styles.bubble}>
          <p className={styles.text}>{naturetexts.bubble}</p>
        </div>

        <div className={styles.grid}>
          {images.map((img, i) => (
            <div key={i} className={styles.gridItem}>
              <Image
                src={`/images/destino/${img}`}
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
