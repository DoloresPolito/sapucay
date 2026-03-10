"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import image from "../../../../public/images/home/herohome.png";
import Button from "@/src/components/ui/Button";
export default function Hero({herotexts}) {
  return (
    <div className={styles.herosection}>
      <div className={styles.heroimage}>
        <Image
          src={image}
          fill
          alt=""
          priority
          style={{ objectFit: "cover" }}
        />

        <div className={styles.overlay}>
    
            <h2 className={styles.titleh2}>{herotexts.title}</h2>
            <h3 className={styles.titleh3}>{herotexts.subtitle}</h3>

            <div>
              <Button>{herotexts.button}</Button>
            </div>
        
        </div>
      </div>
    </div>


  );
}
