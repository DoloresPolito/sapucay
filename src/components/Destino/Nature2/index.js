import styles from "./style.module.scss";

import Image from "next/image";
import image from "../../../../public/images/destino/nature2.png";



export default function Nature2({ naturetexts }) {
  return (
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
         


            <div className={styles.textcontainer}>
              <p className={styles.text}>{naturetexts.text1}</p>
              <p className={styles.text}>{naturetexts.text2}</p>

            </div>

        
          </div>
        </div>
      </div>
    </div>
  );
}
