'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Image from 'next/image';

interface Profession {
  id: string;
  label: string;
}

interface Prestador {
  id: number;
  nome: string;
  categoria?: string;
  imagem?: string;
  nota: number;
  descricao: string;
  precoPorHora: number;
  profissoes: string[];
}

export default function ListaProfissionais() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const professions: Profession[] = [
    { id: 'eletricista', label: 'Eletricista' },
    { id: 'encanador', label: 'Encanador' },
    { id: 'pintor', label: 'Pintor' },
    { id: 'pedreiro', label: 'Pedreiro' },
    { id: 'carpinteiro', label: 'Carpinteiro' },
    { id: 'marceneiro', label: 'Marceneiro' },
    { id: 'serralheiro', label: 'Serralheiro' },
    { id: 'gesseiro', label: 'Gesseiro' },
    { id: 'azulejista', label: 'Azulejista' },
    { id: 'jardineiro', label: 'Jardineiro' },
    { id: 'mecanico', label: 'Mecânico' },
    { id: 'eletronico', label: 'Eletrônico' },
    { id: 'padeiro', label: 'Padeiro' },
    { id: 'cozinheiro', label: 'Cozinheiro' },
    { id: 'garcom', label: 'Garçom' },
    { id: 'motorista', label: 'Motorista' },
    { id: 'seguranca', label: 'Segurança' },
    { id: 'porteiro', label: 'Porteiro' },
    { id: 'faxineiro', label: 'Faxineiro' },
    { id: 'vendedor', label: 'Vendedor' },
    { id: 'vidraceiro', label: 'Vidraceiro' },
    { id: 'tapeceiro', label: 'Tapeceiro' },
    { id: 'montador', label: 'Montador de Móveis' },
    { id: 'reparador', label: 'Reparador de Eletrodomésticos' },
    { id: 'piscineiro', label: 'Piscineiro' },
    { id: 'calheiro', label: 'Calheiro' },
    { id: 'impermeabilizador', label: 'Impermeabilizador' },
    { id: 'dedetizador', label: 'Dedetizador' },
    { id: 'limpador', label: 'Limpador de Vidros' },
    { id: 'restaurador', label: 'Restaurador de Móveis' },
    { id: 'refrigerista', label: 'Refrigerista' },
    { id: 'soldador', label: 'Soldador' },
    { id: 'chaveiro', label: 'Chaveiro' },
    { id: 'desentupidor', label: 'Desentupidor' },
    { id: 'piso', label: 'Instalador de Piso' },
    { id: 'telhadista', label: 'Telhadista' },
    { id: 'cortineiro', label: 'Instalador de Cortinas' },
    { id: 'persianista', label: 'Instalador de Persianas' },
    { id: 'arcondicionado', label: 'Instalador de Ar Condicionado' },
    { id: 'aquecedor', label: 'Instalador de Aquecedores' },
    { id: 'elevador', label: 'Técnico de Elevadores' },
    { id: 'portao', label: 'Instalador de Portões Automáticos' },
    { id: 'cercas', label: 'Instalador de Cercas Elétricas' },
    { id: 'alarme', label: 'Instalador de Alarmes' },
    { id: 'cftv', label: 'Instalador de CFTV' },
    { id: 'som', label: 'Instalador de Sistemas de Som' },
    { id: 'iluminacao', label: 'Instalador de Iluminação' },
    { id: 'gesso', label: 'Instalador de Gesso' },
    { id: 'drywall', label: 'Instalador de Drywall' },
    { id: 'teto', label: 'Instalador de Teto Falso' },
    { id: 'pvc', label: 'Instalador de Forro de PVC' },
  ];

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

  const filteredData = data.filter((profissional) => {
    const matchesSearchTerm =
      profissional.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profissional.profissoes.some((profissao) =>
        profissao.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === '' ||
      profissional.profissoes.includes(selectedCategory.toLowerCase());

    return matchesSearchTerm && matchesCategory;
  });
  console.log('filteredData: ', filteredData);
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
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="">Filtre por profissão</option>
          {professions.map((profession) => (
            <option key={profession.id} value={profession.label}>
              {profession.label}
            </option>
          ))}
        </select>
      </div>

      {filteredData.map((profissional) => (
        <div
          key={profissional.id}
          className="flex flex-col lg:flex-row gap-6 bg-white border p-6 rounded-lg mb-6 relative max-w-[800px] mx-auto"
        >
          <div className="flex-shrink-0">
            <Image
              src={profissional.imagem || ''}
              alt={profissional.nome}
              width={200}
              height={200}
              className="max-h-[200px] max-w-[200px] min-h-[200px] min-w-[200px] object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col justify-between w-full">
            <div>
              <h1 className="text-2xl font-bold">{profissional.nome}</h1>
              <div className="flex items-center mt-2">
                <div className="flex mr-2">
                  {Number.isFinite(profissional.nota) ? (
                    <>
                      {[...Array(Math.floor(profissional.nota))].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-yellow-500 w-5 h-5 mx-1"
                        />
                      ))}
                      {profissional.nota % 1 !== 0 && (
                        <FaStarHalfAlt className="text-yellow-500 w-5 h-5 mx-1" />
                      )}
                      {[...Array(5 - Math.ceil(profissional.nota))].map(
                        (_, i) => (
                          <FaRegStar
                            key={i}
                            className="text-yellow-500 w-5 h-5 mx-1"
                          />
                        ),
                      )}
                    </>
                  ) : (
                    [...Array(5)].map((_, i) => (
                      <FaRegStar
                        key={i}
                        className="text-yellow-500 w-5 h-5 mx-1"
                      />
                    ))
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {profissional.nota
                    ? `${profissional.nota} de 5 estrelas`
                    : 'Sem avaliações'}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-2 ">
                {profissional.profissoes.map((item) => (
                  <div
                    key={item}
                    className="border border-yellow-400 text-black px-2 text-center rounded-full"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="bg-[#F2F1F7] text-black mt-4 py-1 px-2 rounded-md ">
                <p className="">Sobre mim</p>
                <p className="text-sm">{profissional.descricao}</p>
              </div>
            </div>
            <div className="flex self-end">
              <Link
                href={`/servicos/servicoDetalhado/confirmacao`}
                className="mt-6 bg-blue-600 text-white text-lg font-semibold p-2 rounded-lg hover:bg-blue-700 inline-block"
              >
                Contratar
              </Link>
            </div>
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
