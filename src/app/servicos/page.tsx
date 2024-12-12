'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Calendar } from '@/components/ui/calendar';
import Modal from '@/components/Modal';

import ProfileImage from '@/assets/profile.png';
import { useClienteStore } from '@/context/cliente';
// Removed unused import: DateRange

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
  plano?: 'bronze' | 'prata' | 'ouro' | null; // Adicionei o campo plano
}

interface Avaliacao {
  mediaNotas: number;
  totalAvaliacoes: number;
  avaliacoes: AvaliacaoItem[];
}

interface AvaliacaoItem {
  descricao: string;
}

export default function ListaProfissionais() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avaliacao, setAvaliacao] = useState<Avaliacao>({
    mediaNotas: 0,
    totalAvaliacoes: 0,
    avaliacoes: [],
  });
  const { cliente } = useClienteStore();

  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

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
      const planoRank = { ouro: 3, prata: 2, bronze: 1, null: 0 };
      const planoA = planoRank[a.plano ?? 'null'];
      const planoB = planoRank[b.plano ?? 'null'];

      if (planoA !== planoB) {
        return planoB - planoA;
      }

      return b.mediaNotas - a.mediaNotas;
    });

  const handleConfirmReservation = async () => {
    if (!selectedDate || !selectedUserId) {
      console.error('Data ou usuário selecionado ausente.');
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

  const fetchClienteAvaliacoes = useCallback(
    async (clienteId: string) => {
      if (!clienteId) {
        console.error('Cliente ID is undefined');
        return;
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_API}/avaliacao/prestador/${clienteId}`,
        );
        const result = await response.json();
        setAvaliacao(result);
      } catch (error) {
        console.error('Erro ao buscar dados do cliente:', error);
      }
    },
    [setAvaliacao],
  );

  useEffect(() => {
    if (cliente && cliente.id) {
      fetchClienteAvaliacoes(cliente.id);
    }
  }, [cliente.id, fetchClienteAvaliacoes]);

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
