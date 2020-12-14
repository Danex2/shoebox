import { useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function Container({ title, children }: LayoutProps) {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
