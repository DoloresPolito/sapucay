import styles from "./style.module.scss";

export default function Container({ children, color }) {
  return (
    <div
      className={styles.container}
      style={color ? { backgroundColor: color } : undefined}
    >
      {children}
    </div>
  );
}