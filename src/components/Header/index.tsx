'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/assets/icones/logo_azul_e_cinzas_e_nome.svg';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-5 px-2">
        <div>
          <Link href="/" className="flex items-center rtl:space-x-reverse">
            <Image src={Logo} className="" alt="logo" width={200} height={48} />
            <span className="text-3xl font-semibold whitespace-nowrap dark:text-black" />
          </Link>
        </div>
        <nav className="hidden lg:flex space-x-4 items-center">
          <Link href="/" className="text-black hover:text-yellow-400">
            Início
          </Link>
          <Link href="perfil" className="text-black hover:text-yellow-400">
            Perfil
          </Link>
          <Link href="/servicos" className="text-black hover:text-yellow-400">
            Serviços
          </Link>
          <Link href="/quemSomos" className="text-black hover:text-yellow-400">
            Quem Somos
          </Link>
          <Link
            href="/login"
            className="bg-white border border-yellow-400 rounded-lg hover:bg-yellow-100 text-yellow-400 text-center font-semibold py-2 px-4"
          >
            Entrar
          </Link>
          <Link
            href="/cadastro"
            className="bg-yellow-400 rounded-lg hover:bg-yellow-600 text-white text-center font-semibold py-2 px-4"
          >
            Cadastre-se
          </Link>
        </nav>
        <button className="block lg:hidden text-black" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        >
          <nav
            className="fixed top-0 right-0 w-64 h-full bg-white z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className='mb-10'>
              <button
                className="absolute top-4 left-4 text-black"
                onClick={closeMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <Link
                  href="/"
                  className="text-black hover:text-yellow-400"
                  onClick={toggleMenu}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="perfil"
                  className="text-black hover:text-yellow-400"
                  onClick={toggleMenu}
                >
                  Perfil
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-black hover:text-yellow-400"
                  onClick={toggleMenu}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/quemSomos"
                  className="text-black hover:text-yellow-400"
                  onClick={toggleMenu}
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="bg-white border border-yellow-400 rounded-lg hover:bg-yellow-100 text-yellow-400 text-center font-semibold py-2 px-4"
                  onClick={toggleMenu}
                >
                  Entrar
                </Link>
              </li>
              <li>
                <Link
                  href="/cadastro"
                  className="bg-yellow-400 rounded-lg hover:bg-yellow-600 text-white text-center font-semibold py-2 px-4"
                  onClick={toggleMenu}
                >
                  Cadastre-se
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
