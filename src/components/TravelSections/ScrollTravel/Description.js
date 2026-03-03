import styles from "./style.module.scss";
import Button from "../../ui/Button";

export default function Description({ title, subtitle, items }) {


  return (
    <div className={styles.description}>
      <h1 className={styles.traveldescriptiontitle}>{title}</h1>
      <p className={styles.traveldescriptionsubtitle}>{subtitle}</p>

      <div className={styles.itemscontainer}>
        {items.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Contenido base */}
            <div className={styles.overlayBase}>
              <h3 className={styles.traveldescriptionitemtitle}>{item.title}</h3>
              <p className={styles.traveldescriptionitemsubtitle}>{item.subtitle}</p>
              <p className={styles.traveldescriptionitemtext} >{item.text}</p>
              <Button>{item.button}</Button>
            </div>
         
            {/* Overlay hover */}
            <div className={styles.overlayHover}>
              {/* <h3 className={styles.traveldescriptionitemtitle}>{item.title}</h3>
              <p className={styles.traveldescriptionitemsubtitle}>{item.subtitle}</p> */}
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
