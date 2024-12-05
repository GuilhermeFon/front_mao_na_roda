'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useClienteStore } from '@/context/cliente';

import PerfilImage from '@/assets/perfil.jpg';
import StarImage from '@/assets/icones/full_star.svg';
import HalfStarImage from '@/assets/icones/half_star.svg';
import DocumentIcon from '@/assets/icones/icone_docu_check_branco.svg';
import ServicesIcon from '@/assets/icones/icone_50_branco.svg';
import VerifiedIcon from '@/assets/icones/icone_perfil_branco.svg';

export default function Perfil() {
  const { cliente } = useClienteStore();

  // useEffect(() => {
  // 	async function fetchClienteData() {
  // 		const response = await fetch(
  // 			`${process.env.NEXT_PUBLIC_URL_API}/usuarios/${cliente.id}`,
  // 			{
  // 				headers: {
  // 					"Content-Type": "application/json",
  // 					Authorization: `Bearer ${cliente.token}`,
  // 				},
  // 				method: "GET",
  // 			},
  // 		);

  // 		if (response.status === 200) {
  // 			// Processar dados do cliente caso necessário
  // 		}
  // 	}

  // 	fetchClienteData();
  // }, [cliente.id, cliente.token]);

  return (
    <main className="bg-gray-100 min-h-screen py-10">
      <section className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Seção de informações pessoais */}
        <div className="mb-5 max-w-[50%]">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-black dark:text-white ml-2"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            className="bg-Azul2 border border-Azul2 text-sm rounded-lg focus:ring-Azul2 focus:border-Azul2 block w-full p-2.5"
            placeholder="Seu nome"
            required
          />
        </div>
        <div className="mb-5 max-w-[50%]">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-black dark:text-white ml-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-Azul2 border border-Azul2 text-sm rounded-lg focus:ring-Azul2 focus:border-Azul2 block w-full p-2.5"
            placeholder="seu_email@exemplo.com"
            required
          />
        </div>
        <div className="mb-5 max-w-[50%]">
          <label
            htmlFor="telefone"
            className="block mb-2 text-sm font-medium text-black dark:text-white ml-2"
          >
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            className="bg-Azul2 border border-Azul2 text-sm rounded-lg focus:ring-Azul2 focus:border-Azul2 block w-full p-2.5"
            placeholder="(00) 00000-0000"
            required
          />
        </div>
        <div className="mb-5 max-w-[50%]">
          <label
            htmlFor="nascimento"
            className="block mb-2 text-sm font-medium text-black dark:text-white ml-2"
          >
            Data de Nascimento
          </label>
          <input
            type="date"
            id="nascimento"
            className="bg-Azul2 border border-Azul2 text-sm rounded-lg focus:ring-Azul2 focus:border-Azul2 block w-full p-2.5"
            required
          />
        </div>
        <div className="max-w-[45%] flex flex-col justify-between py-5 h-full">
          <div>
            <label
              htmlFor="desc"
              className="block mb-2 text-sm font-medium text-black dark:text-white ml-2"
            >
              Descrição
            </label>
            <textarea
              id="desc"
              rows={10}
              style={{ width: '500px', height: '150px' }} // Define largura e altura fixas
              className="bg-Azul2 border border-Azul2 text-sm rounded-lg focus:ring-Azul2 focus:border-Azul2 block p-2.5"
              placeholder="Diga algo sobre você aos seus clientes..."
            />
          </div>
          <button
            type="submit"
            className="text-black font-bold mt-5 min-w-[50%] mx-auto bg-Amarelo hover:bg-AzulMaisForte focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Salvar
          </button>
        </div>

        {/* Seção de perfil e estatísticas */}
        <div className="space-y-6">
          {/* Perfil do Usuário */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4">
            <Image
              src={PerfilImage}
              alt="Foto do Perfil"
              width={100}
              height={100}
              className="rounded-full border-4 border-blue-500"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                {cliente.nome}
              </h2>
              <div className="flex items-center space-x-2">
                <Image src={StarImage} alt="" width={20} height={20} />
                <Image src={StarImage} alt="" width={20} height={20} />
                <Image src={StarImage} alt="" width={20} height={20} />
                <Image src={StarImage} alt="" width={20} height={20} />
                <Image src={HalfStarImage} alt="" width={20} height={20} />
              </div>
              <p className="text-gray-600 text-sm">Plano: Ouro</p>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <Image
                src={DocumentIcon}
                alt="Documentos"
                width={40}
                height={40}
              />
              <p className="mt-2 text-sm">Documentos Verificados</p>
            </div>
            <div>
              <Image src={ServicesIcon} alt="Serviços" width={40} height={40} />
              <p className="mt-2 text-sm">50 Serviços Concluídos</p>
            </div>
            <div>
              <Image
                src={VerifiedIcon}
                alt="Verificado"
                width={40}
                height={40}
              />
              <p className="mt-2 text-sm">Perfil Verificado</p>
            </div>
          </div>

          {/* Links Extras */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Link
              href="/galeria"
              className="block bg-blue-500 text-white py-3 text-center font-bold rounded-lg hover:bg-blue-600 transition"
            >
              Galeria
            </Link>
            <Link
              href="/avaliacoes"
              className="block mt-4 bg-blue-500 text-white py-3 text-center font-bold rounded-lg hover:bg-blue-600 transition"
            >
              Avaliações
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
