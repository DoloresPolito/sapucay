import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/src/i18n/routing";
// import { notFound } from 'next/navigation';
import { setRequestLocale } from "next-intl/server";
import PageTransition from "@/src/components/PageTransition";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // opcional (recomendado)
});

import "./globals.scss";
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  // if (!hasLocale(routing.locales, locale)) return notFound();

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        {/* <body> */}
        <NextIntlClientProvider messages={messages}>
          <PageTransition>{children}</PageTransition>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
