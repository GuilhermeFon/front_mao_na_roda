import type { ReactNode } from "react";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export const metadata = {
  title: "Mão na roda",
  description: "Plataforma que conecta profissionais e clientes",
  keywords: [""],
};


export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
