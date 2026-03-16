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

        {/* ========================= */}
        {/* DESKTOP TABLE */}
        {/* ========================= */}
        <div className={styles.desktopTable}>
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
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================= */}
        {/* MOBILE TABLES */}
        {/* ========================= */}

        <div className={styles.mobileTables}>
          {tabletext.columns.map((col, colIndex) => (
            <div key={colIndex} className={styles.mobileCard}>
              <div className={styles.mobileHeader}>
                <span className={styles.text}>{col.name}</span>
                <small>{col.level}</small>
              </div>

              <div className={styles.mobileList}>
                {tabletext.rows.map((row, rowIndex) => (
                  <div key={rowIndex} className={styles.mobileItem}>
                    <p className={styles.text}>{row.label}</p>
                    <p className={styles.text}>
                      {row.values[colIndex]}
                    </p>
                  </div>
                ))}
              </div>

              <button
                className={styles.mobileButton}
                onClick={() => console.log("go to", col.name)}
              >
                {tabletext.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
