'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import StarImage from '@/assets/icones/full_star.svg';
import HalfStarImage from '@/assets/icones/half_star.svg';
import ProfileImage from '@/assets/profile.png';

export default function ServicosDetalhados() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const data = [
    {
      id: 1,
      nome: 'João',
      categoria: 'Pintor',
      nota: 4.5,
      descricao:
        'João é um pintor experiente com mais de 10 anos no mercado. Ele é conhecido por sua atenção aos detalhes e pela entrega de resultados impecáveis.',
      imagem:
        'https://soscasacuritiba.com.br/wp-content/uploads/2023/10/Quanto-ganha-um-Pintor.jpg',
      precoPorHora: 50,
    },
    {
      id: 2,
      nome: 'Maria',
      categoria: 'Faxineira',
      nota: 4.8,
      descricao:
        'Maria é uma faxineira detalhista, garantindo limpeza impecável em cada ambiente que ela cuida.',
      imagem:
        'https://blog.famyle.com/wp-content/uploads/2022/12/housekeeper-holding-bottle-with-cleaner-liquid-in-hands-1024x683.webp',
      precoPorHora: 40,
    },
    {
      id: 3,
      nome: 'Carlos',
      categoria: 'Eletricista',
      nota: 4.7,
      descricao:
        'Carlos é um eletricista altamente qualificado, com mais de 15 anos de experiência, especializado em instalações residenciais e comerciais.',
      imagem:
        'https://soscasacuritiba.com.br/wp-content/uploads/2023/10/Quanto-ganha-um-Pintor.jpg',
      precoPorHora: 80,
    },
    {
      id: 4,
      nome: 'Ana',
      categoria: 'Encanadora',
      nota: 4.6,
      descricao:
        'Ana é uma encanadora experiente, conhecida pela sua habilidade em resolver problemas complexos com rapidez e eficiência.',
      imagem:
        'https://soscasacuritiba.com.br/wp-content/uploads/2023/10/Quanto-ganha-um-Pintor.jpg',
      precoPorHora: 55,
    },
    {
      id: 5,
      nome: 'Pedro',
      categoria: 'Marceneiro',
      nota: 4.9,
      descricao:
        'Pedro é um marceneiro criativo, especializado em móveis sob medida para todos os tipos de ambientes.',
      imagem:
        'https://soscasacuritiba.com.br/wp-content/uploads/2023/10/Quanto-ganha-um-Pintor.jpg',
      precoPorHora: 70,
    },
    {
      id: 6,
      nome: 'Fernanda',
      categoria: 'Jardineira',
      nota: 4.3,
      descricao:
        'Fernanda tem vasta experiência em jardinagem, cuidando de áreas verdes com muito amor e dedicação.',
      imagem:
        'https://soscasacuritiba.com.br/wp-content/uploads/2023/10/Quanto-ganha-um-Pintor.jpg',
      precoPorHora: 45,
    },
  ];

  const filteredData = data.filter((profissional) => {
    const matchesSearchTerm =
      profissional.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profissional.categoria.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === '' || profissional.categoria === selectedCategory;

    return matchesSearchTerm && matchesCategory;
  });

  return (
    <section className="container w-full mx-auto px-4 py-10">
      <div className="mb-4">
        <Link
          href="/"
          className="text-gray-500 text-sm font-bold hover:underline"
        >
          ← Voltar
        </Link>
      </div>
      <div>
        <section className="container w-full mx-auto px-2 py-10" />
        <h1 className="text-3xl font-bold text-center mb-6">
          Profissionais Disponíveis
        </h1>
      </div>

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
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="">Escolha a profissão</option>
          <option value="Pintor">Pintor(a)</option>
          <option value="Faxineira">Faxineir(a)</option>
          <option value="Marceneiro">Marceneiro(a)</option>
          <option value="Encanadora">Encanador(a)</option>
          <option value="Eletricista">Eletricista</option>
          <option value="Jardineira">Jardineiro(a)</option>
        </select>
      </div>

      {filteredData.map((profissional) => (
        <div
          key={profissional.id}
          className="flex flex-col lg:flex-row gap-6 bg-background shadow-lg p-6 rounded-lg mb-6"
        >
          <div className="flex-shrink-0">
            <Image
              src={profissional.imagem || ProfileImage}
              alt={profissional.nome}
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{profissional.nome}</h1>
            <p className="text-sm text-gray-600">{profissional.categoria}</p>
            <div className="flex items-center mt-2">
              {[...Array(Math.floor(profissional.nota))].map((_, i) => (
                <Image
                  key={i}
                  className="w-5 h-5 mx-1"
                  src={StarImage}
                  alt="Star"
                />
              ))}
              {profissional.nota % 1 !== 0 && (
                <Image
                  className="w-5 h-5 mx-1"
                  src={HalfStarImage}
                  alt="Half Star"
                />
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {profissional.nota} de 5 estrelas
            </p>
            <p className="mt-4 text-gray-700">{profissional.descricao}</p>
            <p className="mt-4 text-xl font-semibold text-gray-800">
              R$ {profissional.precoPorHora}/hora
            </p>
            <Link
              href={`/servicos/servicoDetalhado/confirmacao`}
              className="mt-6 bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded-full hover:bg-blue-700 inline-block"
            >
              Contratar
            </Link>
          </div>
        </div>
      ))}

      {filteredData.length === 0 && (
        <p className="text-gray-500 text-center">
          Nenhum profissional encontrado para os critérios selecionados.
        </p>
      )}
    </section>
  );
}
