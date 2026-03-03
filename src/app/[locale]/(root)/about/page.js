import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function About({
  params,
}) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t =  await getTranslations('AboutPage');


  return (
    <div className='space-y-2'>
      <h1 className='text-4xl font-bold text-yellow-100'>
        {t('title')}
      </h1>
      <p>{t('description')}</p>
      <p>{t('team')}</p>
    </div>
  );
}