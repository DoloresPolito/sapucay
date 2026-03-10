
import Navbar from "@/src/components/structure/Navbar";
import Footer from "@/src/components/structure/Footer";

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  return (
    <div>
      <Navbar />
      <main >{children}</main>
      <Footer/>
    </div>
  );
}
