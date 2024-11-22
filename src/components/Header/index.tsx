import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/assets/icones/logo_azul_e_cinzas_e_nome.svg';

export function Header() {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-5 px-2">
        <div>
          <Link href="/" className="flex items-center rtl:space-x-reverse">
            <Image src={Logo} className="" alt="logo" width={200} height={48} />
            <span className="text-3xl font-semibold whitespace-nowrap dark:text-black"></span>
          </Link>
        </div>
        {/* searchbar */}
        {/* <div className="w-100% bg-gray-100">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            <form className="max-w-xl container rounded-full">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full max-h-10 py-4 rounded-full ps-4 text-sm text-gray-900 border border-gray-300 italic bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Pesquisar"
                  required
                />
                <button
                  type="submit"
                  className="text-white max-w-10 h-10 absolute bg-gray-50 border-t border-b end-0 border-gray-300 bottom-0 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-s-none rounded-e-full text-sm px-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                ></button>
                <button
                  type="submit"
                  className="text-white max-w-10 h-6 absolute bg-gray-50 border-s end-0 border-gray-300 bottom-2 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-s-none rounded-e-full text-sm px-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <a href="/pesquisa">
                    <svg
                      className="w-4 h-4 text-gray-500 relative end-1.5 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </a>
                </button>
              </div>
            </form>
          </div>
        </div> */}
        <nav className="bg-white border-gray-200">
          <ul className="flex justify-center space-x-4 py-4">
            <li>
              <Link href="/" className="text-black hover:text-yellow-400">
                Início
              </Link>
            </li>
            <li>
              <Link href="/" className="text-black hover:text-yellow-400">
                Perfil
              </Link>
            </li>
            <li>
              <Link
                href="/servicos"
                className="text-black hover:text-yellow-400"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="bg-yellow-400 rounded-lg  hover:bg-yellow-600 text-white text-center font-semibold py-2 px-4 "
              >
                Entrar
              </Link>
            </li>
            <li>
              <Link
                href="/cadastro"
                className="bg-blue-900 rounded-lg  hover:bg-blue-950x text-white text-center font-semibold py-2 px-4"
              >
                Cadastre-se
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
