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
    { title: t("col1item2"), href: `/${locale}/cultura` },
    { title: t("col1item3"), href: `/${locale}/bienestar` },
    { title: t("col1item4"), href: `/${locale}/naturaleza` },
    { title: t("col1item5"), href: `/${locale}/impacto` },
    { title: t("col2item1"), href: `/${locale}/destino` },
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
          <h2 className={styles.logo}>SPUCAY EXPERIENCE</h2>
          <p className={styles.titleh3}>{t("subtitle")}</p>
        </div>
  
        <div className={styles.col}>
          <h4 className={styles.titlefooter}>{t("title1")}</h4>
  
          <div className={styles.links}>
            {links.map((link, i) => (
              <Link key={i} href={link.href}>
                <motion.div className={styles.navitem} whileHover="hover">
                  <p className={styles.textfooter}>{link.title}</p>
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
          <h4  className={styles.titlefooter}>{t("title2")}</h4>
  
          <p className={styles.textfooter}>Col. Carlos Pellegrini, Corrientes, Argentina</p>
          <p className={styles.textfooter}>info@sapucay.travel</p>
          <p className={styles.textfooter}>WhatsApp directo</p>
        </div>
  
      </div>
  
      <div className={styles.bottom}>
        <p className={styles.textfooter}>{t("right")}</p>
      </div>
    </footer>
  );
}
