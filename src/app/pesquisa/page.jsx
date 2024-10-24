import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function pesquisa()  {
  return (
    <main className="flex mt-5 max-w-screen-xl mx-auto">
      {/* Sidebar de Filtros */}
      <aside className="w-1/4 p-4 h-fit rounded-t-md bg-gray-100">
        <h2 className="text-lg font-bold mb-4">Filtros</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Categoria
          </label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option>Todos</option>
            <option>Jardineiro</option>
            <option>Macenaria</option>
            <option>Reformas</option>
            <option>Eletrica</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Preço
          </label>
          <input
            type="range"
            className="w-full mt-2"
            min="0"
            max="1000"
          />
        </div>
        <div>
          <button className="w-full bg-blue-500 text-white p-2 rounded-md">
            Aplicar Filtros
          </button>
        </div>
      </aside>

      {/* Área de Produtos */}
      <section className="w-3/4 p-4">
        <h2 className="text-lg font-bold mb-4">Resultados para: encanador</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Cards de produtos prontos */}
          <div className="flex flex-col justify-evenly items-center text-center border p-8 rounded-lg shadow-md h-full">
            <img className="rounded-lg" src="./maria_encanadora.png" alt="" />
            <h3 className="text-xl font-semibold mb-4">Maria Ana </h3>
            <p className="text-gray-600 mb-4">Soluções rápidas para vazamentos e instalações</p>
            <Link href="/detalhes" className="bg-Amarelo w-[90%] px-0 rounded-full hover:text-blue-700 text-black text-xl text-center font-bold  py-2">
              Ver anúncio
            </Link>
          </div>
          <div className="flex flex-col justify-evenly items-center text-center border p-8 rounded-lg shadow-md h-full">
            <img className="rounded-lg min-h-[272.2px]" src="./profissionais_1.png" alt="" />
            <h3 className="text-xl font-semibold mb-4">José Paulo </h3>
            <p className="text-gray-600 mb-4">O melhor preço</p>
            <Link href="/detalhes" className="bg-Amarelo w-[90%] px-0 rounded-full hover:text-blue-700 text-black text-xl text-center font-bold  py-2">
              Ver anúncio
            </Link>
          </div>
          <div className="flex flex-col justify-evenly items-center text-center border p-8 rounded-lg shadow-md h-full">
            <img className="rounded-lg" src="./profissionais_2.png" alt="" />
            <h3 className="text-xl font-semibold mb-4">Pedro Sampaio</h3>
            <p className="text-gray-600 mb-4">10 anos de experiência</p>
            <Link href="/detalhes" className="bg-Amarelo w-[90%] px-0 rounded-full hover:text-blue-700 text-black text-xl text-center font-bold  py-2">
              Ver anúncio
            </Link>
          </div>
          <div className="flex flex-col justify-evenly items-center text-center border min-h-[497.2px] p-8 rounded-lg shadow-md h-full">
            <img className="rounded-lg" src="./profissionais_3.png" alt="" />
            <h3 className="text-xl font-semibold mb-4">Sebastião Silva </h3>
            <p className="text-gray-600 mb-4">Sebastião Silva</p>
            <Link href="/detalhes" className="bg-Amarelo w-[90%] px-0 rounded-full hover:text-blue-700 text-black text-xl text-center font-bold  py-2">
              Ver anúncio
            </Link>
          </div>
          
         
        </div>
      </section>
    </main>
  );
};


