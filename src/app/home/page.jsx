import React from "react";
import Link from "next/link"; // Uso de Link do Next.js

export function Home() {
  return (
    <main>
      {/* Seção Hero */}
      <section className="bg-blue-900 h-fit  text-white text-center ">
        <div className="container flex justify-evenly items-center max-w-screen-xl mx-auto">
          <div className="">
            <h1 className="text-5xl font-bold mb-4">
              Conectando <span className="text-yellow-400">clientes</span> a
              profissionais
            </h1>
            <p className="text-lg mb-8">
              Tenha mais confiança e rapidez na sua reforma, reparo, pintura ou
              muito mais
            </p>
            <button className="bg-yellow-500 text-black py-3 px-8 rounded-full font-semibold hover:bg-yellow-600">
              SAIBA MAIS
            </button>
          </div>

          <div className="">
            <img
              src="./imagem_profissional.png"
              alt="Profissional"
              style={{width: "210px", height: "auto"}}
              className="object-cover"
            />
          </div>
        </div>

        {/* Imagem do Profissional */}
      </section>

      {/* Seção de Serviços */}
      <section className="py-16 max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Conheça os serviços que oferecemos a você!
        </h2>

        {/* Container da grade */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card de Serviço 1 */}
          <div className="flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-xl font-semibold mb-4">
              Serviço de Encanamento
            </h3>
            <p className="text-gray-600 mb-4">
              Soluções rápidas para vazamentos e instalações
            </p>
            <img
              src="./icones/icone_encanamento.svg"
              alt="Icone de Encanamento"
              className="w-12 h-12 mx-auto mb-4"
            />
          </div>

          {/* Card de Serviço 2 */}
          <div className="flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-xl font-semibold mb-4">Serviços de Limpeza</h3>
            <p className="text-gray-600 mb-4">
              Limpeza detalhada de residências e comércios
            </p>
            <img
              src="./icones/icone_faxina.svg"
              alt="Icone de Limpeza"
              className="w-16 h-16 mx-auto mb-4"
            />
          </div>

          {/* Card de Serviço 3 */}
          <div className="flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-xl font-semibold mb-4">Serviço de Pintura</h3>
            <p className="text-gray-600 mb-4">
              Transforme seu ambiente com pintura profissional
            </p>
            <img
              src="./icones/icone_pintura.svg"
              alt="Icone de Pintura"
              className="w-16 h-16 mx-auto mb-4"
            />
          </div>

          {/* Card de Serviço 4 */}
          <div className="flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-xl font-semibold mb-4">
              Serviço de Eletrecista
            </h3>
            <p className="text-gray-600 mb-4">
              Instalações e reparos elétricos seguros
            </p>
            <img
              src="./icones/icone_eletrecista.svg"
              alt="Icone de eletrecista"
              className="w-16 h-16 mx-auto mb-4"
            />
          </div>

          {/* Card de Serviço 5 */}
          <div className="flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-xl font-semibold mb-4">
              Serviço de Marceneiro
            </h3>
            <p className="text-gray-600 mb-4">
              Móveis sob medida e reparos em madeira
            </p>
            <img
              src="./icones/icone_martelo.svg"
              alt="Icone de Manutenção"
              className="w-16 h-16 mx-auto mb-4"
            />
          </div>

          {/* Card de Serviço 6 */}
          <div className="flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-xl font-semibold mb-4">
              Serviço de Jardinagem
            </h3>
            <p className="text-gray-600 mb-4">Deixe seu jardim sempre bonito</p>
            <img
              src="./icones/icone_pa.svg"
              alt="Icone de Manutenção"
              className="w-16 h-16 mx-auto mb-4"
            />
          </div>

          {/* Card de Serviço 7 */}
          <div className="flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-xl font-semibold mb-4">
              Serviço de Manutenção
            </h3>
            <p className="text-gray-600 mb-4">
              Reparos gerais e para sua casa ou empresa
            </p>
            <img
              src="./icones/icone_ferramentas.svg"
              alt="Icone de Manutenção"
              className="w-16 h-16 mx-auto mb-4"
            />
          </div>

          {/* Card especial */}
          <div className="border p-8 rounded-lg flex flex-col justify-evenly bg-yellow-500 text-white shadow-md h-full">
            <h3 className="text-xl font-semibold mb-4">
              Não encontrou o que procurava?
            </h3>
            <Link href="/services">
              <button className="bg-AzulForte py-2 px-6 rounded-lg hover:bg-blue-700">
                Todos serviços
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
