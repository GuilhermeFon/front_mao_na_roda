"use client"; // Garantir que o componente seja renderizado no lado do cliente

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import StarImage from "@/assets/icones/full_star.svg";
import HalfStarImage from "@/assets/icones/half_star.svg";

export default function ListaProfissionais() {
  const [professionals, setProfessionals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

const data = [{
  "nome": "João",
  "categoria": "Pintor",
  "nota": 4.5,
  "imagem": "https://soscasacuritiba.com.br/wp-content/uploads/2023/10/Quanto-ganha-um-Pintor.jpg",
  "id": 1
},
{
  "nome": "Maria",
  "categoria": "Faxineira",
  "nota": 4.3,
  "imagem": "https://blog.famyle.com/wp-content/uploads/2022/12/housekeeper-holding-bottle-with-cleaner-liquid-in-hands-1024x683.webp",
  "id": 2
},
{
  "nome": "Pedro",
  "categoria": "Marceneiro",
  "nota": 4.8,
  "imagem": "https://lh3.googleusercontent.com/proxy/cc3FUop7yCKwt2BIKfDa3TyEgDOh5iL9X9Y-hYmQ5TB9zHZ9kvdo7zt4GQRcF9q2FNWSFqSWQaooXtcqgdimxW-h-aajMWHS0hQ4lYlL-wib",
  "id": 3
}]

  // Carregar os profissionais da API
  useEffect(() => {
    async function fetchProfessionals() {
      try {
        const response = await fetch("/api/profissionais");
        const data = await response.json();
        setProfessionals(data);
      } catch (error) {
        console.error("Erro ao carregar os profissionais", error);
      }
    }
    fetchProfessionals();
  }, []);

  // Função para filtrar profissionais com base no termo de busca e categoria
  const filteredProfessionals = data.filter((item) => {
    const matchesName = item.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProfession = item.categoria.toLowerCase().includes(category.toLowerCase());
    return matchesName && (category ? matchesProfession : true);
  });

  return (
      <section className="container w-full mx-auto px-2 py-10">
        <h1 className="text-3xl font-bold text-center mb-6">Profissionais Disponíveis</h1>

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
            <option value="encanador">Encanador</option>
            <option value="eletricista">Eletricista</option>
            <option value="pintor">Pintor</option>
            <option value="faxineira">Faxineira</option>
            <option value="jardineiro">Jardineiro</option>
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
                src={item.imagem || "/default-profile.jpg"} // Imagem padrão caso não haja imagem cadastrada
                alt={`${item.nome}`}
                width={250}
                height={250}
              />
              <h2 className="text-xl font-semibold text-center">{item.nome}</h2>
              <p className="text-sm text-gray-600">{item.categoria}</p>
              <div className="flex items-center mt-2">
                {[...Array(Math.floor(item.nota))].map((_, i) => (
                  <Image
                    key={i}
                    className="w-5 h-5 mx-1"
                    src={StarImage}
                    alt="Star"
                  />
                ))}
                {item.nota % 1 !== 0 && (
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
              <Link
                href={`/profissional/${item.id}`}
                className="mt-4 bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-blue-700"
              >
                Ver Perfil
              </Link>
            </div>
          ))}
        </div>
      </section>
  );
}
