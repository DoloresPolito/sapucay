import styles from "../style.module.scss";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Body({ items, selectedLink, setSelectedLink }) {

  const params = useParams();
  const locale = params?.locale || "es";


  return (
    <div className={styles.body}>
      {items.map((item, index) => (
        <Link
          key={index}
          href={`/${locale}${item.url}`}
          className={`${styles.item} ${
            selectedLink.index === index ? styles.active : ""
          }`}
          onMouseEnter={() => setSelectedLink({ isActive: true, index })}
        >
          <h3 className={styles.titleh3}>
            {item.title}
          </h3>
        </Link>
      ))}
    </div>
  );

}