import { Poppins } from 'next/font/google';
import React from 'react';
import type { ReactNode } from 'react';

import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Mão na roda',
  description: 'Plataforma que conecta profissionais e clientes',
  keywords: [''],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="slim-scrollbar">
      <body className={`${poppins.variable} antialiased slim-scrollbar`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
