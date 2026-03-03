import styles from "./style.module.scss";

export default function Button({ children,  type = "button", onClick, disabled, }) {
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