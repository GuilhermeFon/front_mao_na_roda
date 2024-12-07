import Image from 'next/image';
import Link from 'next/link';

import StarImage from '@/assets/icones/full_star.svg';
import HalfStarImage from '@/assets/icones/half_star.svg';

export default function ServicoDetalhado() {
  const data = {
    id: 1,
    nome: 'João',
    categoria: 'Pintor',
    nota: 4.5,
    descricao:
      'João é um pintor experiente com mais de 10 anos no mercado. Ele é conhecido por sua atenção aos detalhes e pela entrega de resultados impecáveis.',
    imagem:
      'https://soscasacuritiba.com.br/wp-content/uploads/2023/10/Quanto-ganha-um-Pintor.jpg',
    precoPorHora: 50,
  };

  return (
    <section className="container w-full mx-auto px-4 py-10">
      <div className="mb-4 ">
        <Link
          href="/servicos"
          className="text-gray-500 text-sm font-bold hover:underline"
        >
          ← Voltar
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 bg-white shadow-lg p-6 rounded-lg">
        {/* Imagem do Profissional */}
        <div className="flex-shrink-0">
          <img
            src={data.imagem || '/default-profile.jpg'}
            alt={data.nome}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Informações do Profissional */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{data.nome}</h1>
          <p className="text-gray-600 text-lg">{data.categoria}</p>

          {/* Avaliação */}
          <div className="flex items-center mt-2">
            {[...Array(Math.floor(data.nota))].map((_, i) => (
              <Image
                key={i}
                src={StarImage}
                alt="Star"
                className="w-5 h-5 mx-1"
              />
            ))}
            {data.nota % 1 !== 0 && (
              <Image
                src={HalfStarImage}
                alt="Half Star"
                className="w-5 h-5 mx-1"
              />
            )}
            <p className="text-sm text-gray-500 ml-2">{data.nota} de 5</p>
          </div>

          {/* Descrição */}
          <p className="mt-4 text-gray-700">{data.descricao}</p>

          {/* Preço */}
          <p className="mt-4 text-xl font-semibold text-gray-800">
            R$ {data.precoPorHora}/hora
          </p>

          {/* Botão de Contratar */}
          <Link
            href={`/contratar/${data.id}`}
            className="mt-6 bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded-full hover:bg-blue-700 inline-block"
          >
            Contratar
          </Link>
        </div>
      </div>
    </section>
  );
}
