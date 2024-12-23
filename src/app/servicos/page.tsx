'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaMedal } from 'react-icons/fa';

import ProfileImage from '@/assets/profile.png';
import Modal from '@/components/Modal';
import { Calendar } from '@/components/ui/calendar';
import { useClienteStore } from '@/context/cliente';

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
  avaliacoes: AvaliacaoItem[];
  mediaNotas: number;
  plano?: 'OURO' | 'PRATA' | 'BRONZE' | null;
}

interface AvaliacaoItem {
  descricao: string;
}

export default function ListaProfissionais() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cliente } = useClienteStore();

  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const professions: Profession[] = [
    { id: 'eletricista', label: 'Eletricista' },
    { id: 'encanador', label: 'Encanador(a)' },
    { id: 'pintor', label: 'Pintor(a)' },
    { id: 'pedreiro', label: 'Pedreiro(a)' },
    { id: 'carpinteiro', label: 'Carpinteiro(a)' },
    { id: 'marceneiro', label: 'Marceneiro(a)' },
    { id: 'serralheiro', label: 'Serralheiro(a)' },
    { id: 'gesseiro', label: 'Gesseiro(a)' },
    { id: 'azulejista', label: 'Azulejista' },
    { id: 'jardineiro', label: 'Jardineiro(a)' },
    { id: 'mecanico', label: 'Mecânico(a)' },
    { id: 'eletronico', label: 'Eletrônico(a)' },
    { id: 'padeiro', label: 'Padeiro(a)' },
    { id: 'cozinheiro', label: 'Cozinheiro(a)' },
    { id: 'garcom', label: 'Garçom/Garçonete' },
    { id: 'motorista', label: 'Motorista' },
    { id: 'seguranca', label: 'Segurança' },
    { id: 'porteiro', label: 'Porteiro(a)' },
    { id: 'faxineiro', label: 'Faxineiro(a)' },
    { id: 'vendedor', label: 'Vendedor(a)' },
    { id: 'vidraceiro', label: 'Vidraceiro(a)' },
    { id: 'tapeceiro', label: 'Tapeceiro(a)' },
    { id: 'montador', label: 'Montador(a) de Móveis' },
    { id: 'reparador', label: 'Reparador(a) de Eletrodomésticos' },
    { id: 'piscineiro', label: 'Piscineiro(a)' },
    { id: 'calheiro', label: 'Calheiro(a)' },
    { id: 'impermeabilizador', label: 'Impermeabilizador(a)' },
    { id: 'dedetizador', label: 'Dedetizador(a)' },
    { id: 'limpador', label: 'Limpador(a) de Vidros' },
    { id: 'restaurador', label: 'Restaurador(a) de Móveis' },
    { id: 'refrigerista', label: 'Refrigerista' },
    { id: 'soldador', label: 'Soldador(a)' },
    { id: 'chaveiro', label: 'Chaveiro(a)' },
    { id: 'desentupidor', label: 'Desentupidor(a)' },
    { id: 'piso', label: 'Instalador(a) de Piso' },
    { id: 'telhadista', label: 'Telhadista' },
    { id: 'cortineiro', label: 'Instalador(a) de Cortinas' },
    { id: 'persianista', label: 'Instalador(a) de Persianas' },
    { id: 'arcondicionado', label: 'Instalador(a) de Ar Condicionado' },
    { id: 'aquecedor', label: 'Instalador(a) de Aquecedores' },
    { id: 'elevador', label: 'Técnico(a) de Elevadores' },
    { id: 'portao', label: 'Instalador(a) de Portões Automáticos' },
    { id: 'cercas', label: 'Instalador(a) de Cercas Elétricas' },
    { id: 'alarme', label: 'Instalador(a) de Alarmes' },
    { id: 'cftv', label: 'Instalador(a) de CFTV' },
    { id: 'som', label: 'Instalador(a) de Sistemas de Som' },
    { id: 'iluminacao', label: 'Instalador(a) de Iluminação' },
    { id: 'gesso', label: 'Instalador(a) de Gesso' },
    { id: 'drywall', label: 'Instalador(a) de Drywall' },
    { id: 'teto', label: 'Instalador(a) de Teto Falso' },
    { id: 'pvc', label: 'Instalador(a) de Forro de PVC' },
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
  }, [cliente.token]);

  const filteredData = data
    .filter((profissional) => {
      const matchesSearchTerm =
        profissional.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profissional.profissoes.some((profissao) =>
          profissao.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesCategory =
        selectedCategory === '' ||
        profissional.profissoes.includes(selectedCategory.toLowerCase());

      return matchesSearchTerm && matchesCategory;
    })
    .sort((a, b) => {
      if (b.mediaNotas !== a.mediaNotas) {
        return b.mediaNotas - a.mediaNotas;
      }

      const planoRank = { OURO: 3, PRATA: 2, BRONZE: 1, null: 0 };
      const planoA = planoRank[a.plano ?? 'null'];
      const planoB = planoRank[b.plano ?? 'null'];

      if (planoA !== planoB) {
        return planoB - planoA;
      }

      return b.avaliacoes.length - a.avaliacoes.length;
    });

  const handleConfirmReservation = async () => {
    if (!selectedDate || !selectedUserId) {
      console.error('Data ou usuário selecionado ausente.');
      return;
    }

    if (!cliente.token) {
      alert('Você precisa estar logado para agendar um serviço.');
      window.location.href = '/login';
      return;
    } else if (cliente.tipo !== 'cliente') {
      alert('Você precisa estar logado como cliente para agendar um serviço.');
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/reserva`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cliente.token}`,
          },
          body: JSON.stringify({
            data: selectedDate,
            clienteId: cliente.id,
            prestadorId: selectedUserId,
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Falha ao criar reserva');
      }

      setIsModalOpen(false);
    } catch (error) {
      console.error('Erro ao criar reserva:', error);
    }
  };

  return (
    <section className="container w-full mx-auto px-4 py-10 min-h-screen flex flex-col justify-between">
      <div>
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
                src={profissional.imagem || ProfileImage}
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
                    {profissional.avaliacoes.length > 0 ? (
                      <>
                        {[...Array(Math.floor(profissional.mediaNotas))].map(
                          (_, i) => (
                            <FaStar
                              key={i}
                              className="text-yellow-500 w-5 h-5 mx-1"
                            />
                          ),
                        )}
                        {profissional.mediaNotas % 1 !== 0 && (
                          <FaStarHalfAlt className="text-yellow-500 w-5 h-5 mx-1" />
                        )}
                        {[...Array(5 - Math.ceil(profissional.mediaNotas))].map(
                          (_, i) => (
                            <FaRegStar
                              key={i}
                              className="text-yellow-500 w-5 h-5 mx-1"
                            />
                          ),
                        )}
                        <p className="text-gray-600 text-sm">
                          ({profissional.avaliacoes.length} avaliações)
                        </p>
                      </>
                    ) : (
                      <>
                        {[...Array(5)].map((_, i) => (
                          <FaRegStar
                            key={i}
                            className="text-yellow-500 w-5 h-5 mx-1"
                          />
                        ))}
                        <p className="text-gray-600 text-sm">Sem avaliações</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {profissional.profissoes.map((item) => (
                    <div
                      key={item}
                      className="border border-yellow-400 text-black px-2 text-center rounded-full"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="bg-[#F2F1F7] text-black mt-4 py-1 px-2 rounded-md">
                  <p className="">Sobre mim</p>
                  <p className="text-sm">{profissional.descricao}</p>
                </div>
              </div>
              <div className="flex self-end">
                <button
                  onClick={() => {
                    setSelectedUserId(profissional.id);
                    setIsModalOpen(true);
                  }}
                  className="mt-6 bg-[#1D69B7] text-white text-lg font-semibold p-2 rounded-lg hover:bg-[#082D53] inline-block transition-colors"
                >
                  Agendar
                </button>
              </div>
            </div>
            {profissional.plano && (
              <div className="absolute top-4 right-4">
                {profissional.plano === 'OURO' && (
                  <FaMedal className="text-yellow-500 w-8 h-8" />
                )}
                {profissional.plano === 'PRATA' && (
                  <FaMedal className="text-gray-400 w-8 h-8" />
                )}
                {profissional.plano === 'BRONZE' && (
                  <FaMedal className="text-yellow-700 w-8 h-8" />
                )}
              </div>
            )}
          </div>
        ))}

        {filteredData.length === 0 && (
          <div className="flex-grow flex items-center justify-center">
            <p className="text-gray-500 text-center">
              Nenhum profissional encontrado para os critérios selecionados.
            </p>
          </div>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Selecione uma data</h2>
        <Calendar
          mode="single"
          selected={selectedDate || undefined}
          onSelect={(date: Date | undefined) => {
            setSelectedDate(date || null);
          }}
          disabled={{ before: new Date() }}
          className="block w-full p-2 text-base justify-items-center border-gray-300 focus:outline-none sm:text-sm rounded-md"
        />
        <div className="w-full p-2 mx-auto flex justify-center gap-5">
          <button
            onClick={() => setIsModalOpen(false)}
            className="mt-4 bg-gray-400 text-white text-lg font-semibold p-2 rounded-lg hover:bg-[#082D53] inline-block transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirmReservation}
            className="mt-4 bg-[#1D69B7] text-white text-lg font-semibold p-2 rounded-lg hover:bg-[#082D53] inline-block transition-colors"
            disabled={!selectedDate || !selectedUserId}
          >
            Confirmar
          </button>
        </div>
      </Modal>
    </section>
  );
}
