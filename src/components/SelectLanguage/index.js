'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import styles from './style.module.scss';

export const SelectLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const changeLanguage = (newLocale) => {
    if (newLocale === currentLocale) return;

    const newPathname = pathname.replace(
      `/${currentLocale}`,
      `/${newLocale}`
    );

    router.push(newPathname);
  };

  return (
    <div className={styles.selectorcontainer}>
      <button
        className={`${styles.custombutton} ${
          currentLocale === 'en' ? styles.selected : ''
        }`}
        onClick={() => changeLanguage('en')}
      >
        US
      </button>

      <button
        className={`${styles.custombutton} ${
          currentLocale === 'es' ? styles.selected : ''
        }`}
        onClick={() => changeLanguage('es')}
      >
        ES 
      </button>
    </div>
  );
};