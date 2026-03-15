"use client";
import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const links = [
    { title: t("col1item1"), href: `/${locale}` },
    { title: t("col1item2"), href: `/${locale}/destino` },
    { title: t("col1item3"), href: `/${locale}/impacto` },
    { title: t("col1item4"), href: `/${locale}/bienestar` },
    { title: t("col1item5"), href: `/${locale}/naturaleza` },
    { title: t("col1item6"), href: `/${locale}/cultura` },
  ];


  const underlineVariants = {
    initial: {
      width: 0,
    },
    hover: {
      width: "100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.col}>
          <h1 className={styles.navtitle}>SPUCAY EXPERIENCE</h1>

          <div className={styles.titlecontainer}>
            <h2 className={styles.titleh2}>{t("subtitle1")}</h2>
            <h2 className={`${styles.titleh2} ${styles.titleWide}`}>
              {t("subtitle2")}
            </h2>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.titlefooter}>{t("title1")}</h4>

          <div className={styles.links}>
            {links.map((link, i) => (
              <Link key={i} href={link.href}>
                <motion.div className={styles.navitem} whileHover="hover">
                  <p className={styles.text}>{link.title}</p>
                  <motion.div
                    className={styles.underline}
                    variants={underlineVariants}
                  />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.titlefooter}>{t("title2")}</h4>

          <p className={styles.text}>
            Col. Carlos Pellegrini, Corrientes, Argentina
          </p>
          <p className={styles.text}>info@sapucay.travel</p>
          <p className={styles.text}>WhatsApp directo</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.text}>{t("right")}</p>
      </div>
    </footer>
  );
}
