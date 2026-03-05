"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import image from "../../../../public/images/home/herohome.png";
import Button from "@/src/components/ui/Button";
export default function Hero() {
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
    
            <h1 className={styles.traveltitle}>titulo</h1>
            <p className={styles.travelsubtitle}>subtitulo</p>

            <div>
              <Button>conocé más</Button>
            </div>
        
        </div>
      </div>
    </div>


  );
}
