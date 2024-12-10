"use client";

import Image from "next/image";
import React, {useState} from "react";

interface Avaliacao {
  tempo: number;
  preco: number;
  limpeza: number;
}

interface CardHistoricoProps {
  nome: string;
  fotoUsuario: string;
  servico: string;
  avaliacao: Avaliacao;
  comentario: string;
}

const CardHistorico: React.FC<CardHistoricoProps> = ({
  nome,
  fotoUsuario,
  servico,
  avaliacao,
  comentario,
}) => {
  const [comentarioAtual, setComentarioAtual] = useState(comentario);

  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span
          key={i}
          className={i < count ? "text-yellow-400" : "text-gray-400"}
        >
          ★
        </span>
      ));
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-md w-full m-4 ms-10 mt-32">
      <h2 className="text-center text-lg font-semibold mb-4">Histórico</h2>

      {/* Nome e foto do profissional */}
      <div className="flex flex-col items-center">
        <Image
          src={fotoUsuario}
          alt={nome} // Usa o nome como alt da imagem
          className="w-24 h-24 rounded-full object-cover mb-2"
          width={96}
          height={96}
        />
        {/* Aqui, removi a palavra "Usuário" e estou exibindo apenas o nome do profissional */}
        <p className="text-xl font-bold">{nome}</p>
      </div>

      {/* Serviço prestado e avaliação */}
      <div className="mt-4 text-center">
        <h3 className="text-sm font-medium">Serviço prestado:</h3>
        <p className="text-lg font-semibold">{servico}</p>
        <div className="flex justify-center gap-4 mt-2">
          <div className="flex flex-col items-start">
            <p>Tempo</p>
            <p>Preço</p>
            <p>Limpeza</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              {renderStars(avaliacao.tempo)}
            </div>
            <div className="flex items-center">
              {renderStars(avaliacao.preco)}
            </div>
            <div className="flex items-center">
              {renderStars(avaliacao.limpeza)}
            </div>
          </div>
        </div>
      </div>

      {/* Comentários */}
      <div className="mt-4">
        <h3 className="text-sm font-medium">Comentários:</h3>
        <textarea
          className="bg-gray-800 p-3 rounded-lg text-sm mt-2 w-full"
          value={comentarioAtual}
          onChange={(e) => setComentarioAtual(e.target.value)}
        />
      </div>

      {/* Botão de avaliação */}
      <div className="flex justify-center mt-6">
        <button className="bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-600">
          Avalie aqui!
        </button>
      </div>
    </div>
  );
};

const ListaCards: React.FC = () => {
  const cardsData = [
    {
      nome: "Encanador Profissional",
      fotoUsuario: "/maria_encanadora.png", // Caminho para a imagem
      servico: "SERVIÇO DE ENCANADOR",
      avaliacao: {tempo: 5, preco: 5, limpeza: 5},
      comentario:
        "Excelente trabalho! O serviço foi feito com rapidez e muito cuidado, sem bagunça e sem causar nenhum transtorno. Recomendo para quem busca qualidade e eficiência!",
    },
    {
      nome: "Eletricista Qualificado",
      fotoUsuario: "/profissionais_2.png", // Caminho para a imagem
      servico: "SERVIÇO DE ELETRICISTA",
      avaliacao: {tempo: 4, preco: 5, limpeza: 4},
      comentario:
        "Ótimo serviço! O profissional foi eficiente e o preço foi justo. Recomendo para qualquer serviço elétrico!",
    },
    {
      nome: "Serviços de Limpeza",
      fotoUsuario: "/profissionais_3.png", // Caminho para a imagem
      servico: "SERVIÇO DE LIMPEZA",
      avaliacao: {tempo: 5, preco: 4, limpeza: 5},
      comentario:
        "A equipe de limpeza foi muito cuidadosa e atenciosa. Excelente para quem procura um ambiente bem cuidado e higienizado.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <CardHistorico key={index} {...card} />
      ))}
    </div>
  );
};

export default ListaCards;
