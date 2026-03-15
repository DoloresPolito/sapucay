"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./style.module.scss";

export default function ComparativeTable({ backgroundImage, tabletext }) {
  const [activeCol, setActiveCol] = useState(null);

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
          <h2 className={styles.titleh2}>{tabletext.title}</h2>
          <h3 className={styles.titleh3}>{tabletext.subtitle}</h3>
        </header>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th />
                {tabletext.columns.map((col, i) => (
                  <th
                    key={i}
                    className={activeCol === i ? styles.activeCol : ""}
                    onMouseEnter={() => setActiveCol(i)}
                    onMouseLeave={() => setActiveCol(null)}
                  >
                    <div className={styles.columnHeader}>
                      <span>{col.name}</span>
                      <small>{col.level}</small>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {tabletext.rows.map((row, i) => (
                <tr key={i}>
                  <td className={styles.rowLabel}>{row.label}</td>

    

                  {row.values.map((value, j) => (
                    <td
                      key={j}
                      className={`${styles.cell} ${
                        activeCol === j ? styles.activeCol : ""
                      }`}
                      onMouseEnter={() => setActiveCol(j)}
                      onMouseLeave={() => setActiveCol(null)}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}

              {/* FILA DE BOTONES */}
              <tr className={styles.buttonRow}>
                <td />

                {tabletext.columns.map((col, i) => (
                  <td
                    key={i}
                    className={`${styles.buttonCell} ${
                      activeCol === i ? styles.activeCol : ""
                    }`}
                    onMouseEnter={() => setActiveCol(i)}
                    onMouseLeave={() => setActiveCol(null)}
                  >
                    <button
                      className={`${styles.moreButton} ${
                        activeCol === i ? styles.activeButton : ""
                      }`}
                      onClick={() => console.log("go to", col.name)}
                    >
                      {tabletext.button}
                    </button>

                    {/* <Link href={`/experiencias/${col.name}`}>
  <button className={...}>Más información</button>
</Link> */}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
