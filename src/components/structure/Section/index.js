import styles from "./style.module.scss";

export default function Section({ children, id }) {
  return (
    <section id={id} className={`${styles.section}`}>{children}</section>
  );
}