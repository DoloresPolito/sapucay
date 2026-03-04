
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
