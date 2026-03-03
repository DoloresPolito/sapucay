// import { Header } from '@/src/components/Header';
import { SelectLanguage } from "@/src/components/SelectLanguage";
import Header from "@/src/components/structure/Header"
import Navbar from "@/src/components/structure/Navbar";

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  return (
    <div>
      <Navbar />
      <main >{children}</main>
    </div>
  );
}
