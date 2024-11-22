"use client"
import { PropostaI } from "@/utils/types/proposta"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';
import { Header } from "@/components/Header";

export default function Pesquisa() {
  const searchParams = useSearchParams();
  const termo = searchParams.get('termo');
  const [servicos, setServicos] = useState<PropostaI[]>([])
  const router = useRouter();

  // const {termo} = router.query || {}
  let listaProdutos
  
    const listaServico = servicos?.map(servico =>
      <div className="flex flex-col justify-evenly items-center text-center border p-8 rounded-lg shadow-md h-full">
        <img className="rounded-lg" src="./maria_encanadora.png" alt="" />
        <h3 className="text-xl font-semibold mb-4">{servico.nome} </h3>
        <p className="text-gray-600 mb-4">{servico.descricao}</p>
        <h3 className="text-xl font-semibold mb-4">{servico.preco} </h3>
        <Link href="/detalhes" className="bg-Amarelo w-[90%] px-0 rounded-full hover:text-blue-700 text-black text-xl text-center font-bold  py-2">
          Ver anúncio
        </Link>
      </div>

    )
  
  useEffect(() => {

    async function buscaServicos() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/propostas?nome=${termo}`)

      if (response.status == 200) {
        const dados = await response.json()
        // console.log(dados)
        setServicos(dados)

      }
    }


    buscaServicos()
  }, []);
  
  // if (termo){
  //   console.log("!!!!")
  // }
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
        <h2 className="text-lg font-bold mb-4">Resultados para: {termo}</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Cards de produtos prontos */}
          {/* {listaServico} */}
          {listaServico}






        </div>
      </section>
    </main>
    
  );
};


