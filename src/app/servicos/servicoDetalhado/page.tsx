import Image from 'next/image';
import Link from 'next/link';

import StarImage from '@/assets/icones/full_star.svg';
import HalfStarImage from '@/assets/icones/half_star.svg';

export default function ServicosDetalhados() {
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

  return (
    <section className="container w-full mx-auto px-4 py-10">
      <div className="mb-4">
        <Link
          href="/servicos"
          className="text-gray-500 text-sm font-bold hover:underline"
        >
          ← Voltar
        </Link>
      </div>

      {data.map((profissional) => (
        <div
          key={profissional.id}
          className="flex flex-col lg:flex-row gap-6 bg-white shadow-lg p-6 rounded-lg mb-6"
        >
          {/* Imagem do Profissional */}
          <div className="flex-shrink-0">
            <img
              src={profissional.imagem || '/default-profile.jpg'}
              alt={profissional.nome}
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* Informações do Profissional */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{profissional.nome}</h1>
            <p className="text-gray-600 text-lg">{profissional.categoria}</p>

            {/* Avaliação */}
            <div className="flex items-center mt-2">
              {[...Array(Math.floor(profissional.nota))].map((_, i) => (
                <Image
                  key={i}
                  src={StarImage}
                  alt="Star"
                  className="w-5 h-5 mx-1"
                />
              ))}
              {profissional.nota % 1 !== 0 && (
                <Image
                  src={HalfStarImage}
                  alt="Half Star"
                  className="w-5 h-5 mx-1"
                />
              )}
              <p className="text-sm text-gray-500 ml-2">{profissional.nota} de 5</p>
            </div>

            {/* Descrição */}
            <p className="mt-4 text-gray-700">{profissional.descricao}</p>

            {/* Preço */}
            <p className="mt-4 text-xl font-semibold text-gray-800">
              R$ {profissional.precoPorHora}/hora
            </p>

            {/* Botão de Contratar */}
            <Link
              href={`/servicos/servicoDetalhado/confirmacao`}
              className="mt-6 bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded-full hover:bg-blue-700 inline-block"
            >
              Contratar
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

