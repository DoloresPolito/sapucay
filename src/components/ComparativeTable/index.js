"use client";

import Image from "next/image";
import styles from "./style.module.scss";

export default function ComparativeTable({
  backgroundImage,
  title,
  subtitle,

}) {

    const columns = ["Explorador", "Inmersivo", "Regeneración"];

    const rows = [
      {
        label: "Duración",
        values: ["3 días", "5 días", "7 días"],
      },
      {
        label: "Acompañamiento",
        values: ["Básico", "Personalizado", "Integral"],
      },
      {
        label: "Profundidad",
        values: ["Introductoria", "Experiencial", "Transformadora"],
      },
      {
        label: "Impacto territorial",
        values: ["Bajo", "Medio", "Alto"],
      },
      {
        label: "Perfil del viajero",
        values: ["Curioso", "Comprometido", "Buscador de sentido"],
      },
    ];
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image
          src={backgroundImage}
          fill
          alt=""
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.traveldescriptiontitle}>titulo</h2>
          <p className={styles.traveldescriptionsubtitle}>subtitulo</p>
        </header>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th />
                {columns.map((col, i) => (
                  <th key={i}>{col}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td className={styles.rowLabel}>{row.label}</td>
                  {row.values.map((value, j) => (
                    <td key={j}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}