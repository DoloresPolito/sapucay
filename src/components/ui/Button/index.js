import styles from "./style.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Button({ children,  type = "button", onClick, disabled, href}) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "es";

  const finalHref = href ? `/${locale}${href}` : null;
  if (href) {
    return (
      <Link href={finalHref} className={styles.button}>
        <span className={styles.text}>{children}</span>
        <span className={styles.icon}>→</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.text}>{children}</span>
      <span className={styles.icon}>→</span>
    </button>
  
  );
}