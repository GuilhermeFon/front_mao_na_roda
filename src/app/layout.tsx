import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export const metadata = {
  title: "Mão na roda",
  description: "Plataforma que conecta profissionais e clientes",
  keywords: [""],
};

import { ReactNode } from "react";

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
