"use client";
import Footer from "../../../(dashboard)/_components/components1/shared/Footer";
import Header from "../../../(dashboard)/_components/components1/shared/Header";
import { useEffect } from "react";
import "../../../../public/sass/main.scss";
export default function Layout({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  // }, []);
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
