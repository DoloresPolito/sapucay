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
    <div className={styles.footer}>
      <div className={styles.leftcontainer}>
        <div className={styles.topleft}>
          <h4>{t("subtitle")}</h4>

         
        </div>
        <div className={styles.bottom}>
          <p>{t("right")}</p>
        </div>
      </div>

      <div className={styles.rightcontainer}>
        <div className={styles.topright}>
       

          
            <div className={styles.item}>
              <h4>
                {t("title1")}
        
              </h4>
              <div className={styles.navcontainer}>
            <div className={styles.col}>
              {links.map((link, i) => (
                <Link key={i} href={link.href}>
                  <motion.div className={styles.navitem} whileHover="hover">
                    <p>{link.title}</p>

                    <motion.div
                      className={styles.underline}
                      variants={underlineVariants}
                    />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
            </div>
    
          
            <div className={styles.item}>
              <h4>
              {t("title2")}
              </h4>
              <p>Junin 1040, CABA, Recoleta</p>
              <p>(+54) (9 3446) 57-8126</p>
            </div>
      
        </div>
        <div className={styles.bottom}>{/* <p>Back to top</p> */}</div>
      </div>
      <div className={styles.responsiveBottom}>
        <p>{t("right")}</p>
      </div>
    </div>
  );
}
