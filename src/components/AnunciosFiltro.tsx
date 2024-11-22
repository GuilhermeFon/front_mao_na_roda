import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

const AnunciosFiltro: React.FC = () => {
  const [categoria, setCategoria] = useState("todos");
  const [preco, setPreco] = useState(50);
  const [descricaoVisible, setDescricaoVisible] = useState<Record<number, boolean>>({});
  const [anuncios, setAnuncios] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoria(e.target.value);
  };

  const handlePrecoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreco(Number(e.target.value));
  };

  const toggleDescricao = (index: number) => {
    setDescricaoVisible((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const fetchAnuncios = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://api-mao-na-roda.vercel.app/anuncios", {
          params: {
            categoria: categoria !== "todos" ? categoria : undefined,
            preco,
          },
        });
        setAnuncios(response.data);
        setDescricaoVisible({});
      } catch (error: AxiosError | any) {
        console.error("Erro ao carregar os anúncios:", error?.message || error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnuncios();
  }, [categoria, preco]);

  const anunciosExemplo = [
    {
      titulo: "Encanador Profissional",
      descricao:
        "Encanador com ampla experiência em instalação e reparos em sistemas hidráulicos. Oferecemos soluções rápidas e eficazes para qualquer problema relacionado a encanamento. Garantia de qualidade e serviços com preços acessíveis.",
      imagem: "maria_encanadora.png",
    },
    {
      titulo: "Eletricista Qualificado",
      descricao:
        "Eletricista especializado em manutenção elétrica, instalações de pontos de energia, troca de fiação, e reparos. Trabalhamos com segurança e eficiência, sempre seguindo as normas técnicas. Atendemos de residências a empresas.",
      imagem: "profissionais_2.png",
    },
    {
      titulo: "Serviços de Limpeza",
      descricao:
        "Equipe de limpeza profissional, oferecendo serviços para residências, escritórios e comércios. Garantimos um ambiente limpo, higienizado e bem cuidado com produtos de qualidade e técnicas eficientes para cada tipo de superfície.",
      imagem: "profissionais_3.png",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen space-x-12 ms-10">
      {/* Filtro */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Filtros</h2>
        <div className="mb-6">
          <label className="block text-gray-600 text-sm mb-2">Categoria</label>
          <select
            className="w-full p-3 border rounded-lg text-gray-700 bg-gray-200"
            value={categoria}
            onChange={handleCategoriaChange}
          >
            <option value="todos">Todos</option>
            <option value="servicos">Serviços</option>
            <option value="produtos">Produtos</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 text-sm mb-2">Preço</label>
          <input
            type="range"
            className="w-full"
            min="0"
            max="100"
            value={preco}
            onChange={handlePrecoChange}
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>0</span>
            <span>100</span>
          </div>
        </div>
      </div>

      {/* Anúncios */}
      <div className="flex flex-wrap justify-center gap-8 w-full">
        {loading ? (
          <p>Carregando anúncios...</p>
        ) : anuncios.length > 0 ? (
          anuncios.map((anuncio, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
            >
              <div className="relative w-full" style={{ height: "410px" }}>
                <img
                  src={anuncio.imagem}
                  alt="Anúncio"
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-bold">{anuncio.titulo}</h2>
                {descricaoVisible[index] && (
                  <p className="text-gray-600 mt-2">{anuncio.descricao}</p>
                )}
                <button
                  className="bg-yellow-400 text-white rounded-full py-3 px-6 mt-6 hover:bg-yellow-500"
                  onClick={() => toggleDescricao(index)}
                >
                  {descricaoVisible[index]
                    ? "Esconder descrição"
                    : "Ver descrição"}
                </button>
              </div>
            </div>
          ))
        ) : (
          anunciosExemplo.map((anuncio, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
            >
              <div className="relative w-full" style={{ height: "410px" }}>
                <img
                  src={anuncio.imagem}
                  alt="Anúncio"
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-bold">{anuncio.titulo}</h2>
                {descricaoVisible[index] && (
                  <p className="text-gray-600 mt-2">{anuncio.descricao}</p>
                )}
                <button
                  className="bg-yellow-400 text-white rounded-full py-3 px-6 mt-6 hover:bg-yellow-500"
                  onClick={() => toggleDescricao(index)}
                >
                  {descricaoVisible[index]
                    ? "Esconder descrição"
                    : "Ver descrição"}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AnunciosFiltro;
