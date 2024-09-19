"use client";
import Footer from "../components1/shared/Footer";
import Header from "../components1/shared/Header";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
