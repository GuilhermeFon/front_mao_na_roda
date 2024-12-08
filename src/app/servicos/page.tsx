'use client'; // Garantir que o componente seja renderizado no lado do cliente

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import StarImage from '@/assets/icones/full_star.svg';
import HalfStarImage from '@/assets/icones/half_star.svg';

export default function ListaProfissionais() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  interface Prestador {
    id: number;
    nome: string;
    categoria: string;
    imagem?: string;
    nota: number;
  }

  const [data, setData] = useState<Prestador[]>([]);

  useEffect(() => {
    const fetchPrestadores = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_API}/prestador`,
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Erro ao buscar prestadores:', error);
      }
    };

    fetchPrestadores();
  }, []);

  const filteredProfessionals = data.filter((item) => {
    const matchesName = item.nome
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesProfession = item.categoria
      ? item.categoria.toLowerCase().includes(category.toLowerCase())
      : false;
    return matchesName && (category ? matchesProfession : true);
  });

  return (
    <section className="container w-full mx-auto px-2 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Profissionais Disponíveis
      </h1>

      {/* Filtro de Busca */}
      <div className="flex justify-center gap-4 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digite o nome ou profissão"
          className="px-4 py-2 border border-gray-300 rounded-lg w-1/3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="">Escolha a profissão</option>
          <option value="Pintor">Pintor</option>
          <option value="Faxineira">Faxineira</option>
          <option value="Marceneiro">Marceneiro</option>
        </select>
      </div>

      {/* Lista de Profissionais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfessionals.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6"
          >
            <img
              className="rounded-full mb-4 aspect-[4/3]"
              src={item.imagem || '/default-profile.jpg'}
              alt={`${item.nome}`}
              width={250}
              height={250}
            />
            <h2 className="text-xl font-semibold text-center">{item.nome}</h2>
            <p className="text-sm text-gray-600">{item.categoria}</p>
            <div className="flex items-center mt-2">
              {Number.isFinite(item.nota) &&
                [...Array(Math.floor(item.nota))].map((_, i) => (
                  <Image
                    key={i}
                    className="w-5 h-5 mx-1"
                    src={StarImage}
                    alt="Star"
                  />
                ))}
              {Number.isFinite(item.nota) && item.nota % 1 !== 0 && (
                <Image
                  className="w-5 h-5 mx-1"
                  src={HalfStarImage}
                  alt="Half Star"
                />
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {item.nota} de 5 estrelas
            </p>
            <div className="flex justify-center items-center mt-4 gap-2">
              <Link
                href={`/profissional/${item.id}`}
                className="bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-blue-700"
              >
                Ver Perfil
              </Link>
              <Link
                href={`servicos/servicoDetalhado`}
                className="bg-yellow-500 text-black text-sm font-bold py-2 px-4 rounded-full hover:bg-yellow-600"
              >
                Contratar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
