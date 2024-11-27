import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ProfissionalImage from '@/assets/imagem_profissional.png';
import EncanamentoIcon from '@/assets/icones/icone_encanamento.svg';
import FaxinaIcon from '@/assets/icones/icone_faxina.svg';
import PinturaIcon from '@/assets/icones/icone_pintura.svg';
import EletricistaIcon from '@/assets/icones/icone_eletrecista.svg';
import MarceneiroIcon from '@/assets/icones/icone_martelo.svg';
import JardinagemIcon from '@/assets/icones/icone_pa.svg';
import FerramentasIcon from '@/assets/icones/icone_ferramentas.svg';

export function Home() {
  return (
    <main>
      {/* Seção Hero */}
      <section className="bg-blue-900 h-fit  text-white text-start ">
        <div className="container flex justify-between items-center mx-auto">
          <div className="">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Conectando <span className="text-yellow-400">clientes</span> a
              profissionais
            </h1>
            <p className="text-lg mb-8">
              Tenha mais confiança e rapidez na sua reforma, reparo, pintura ou
              muito mais
            </p>
            <button
              type="submit"
              className="bg-yellow-400 text-white py-3 px-8 rounded-lg font-semibold hover:bg-yellow-600"
            >
              SAIBA MAIS
            </button>
          </div>

          <div className="hidden lg:block">
            <Image
              src={ProfissionalImage}
              alt="Profissional"
              width={210}
              height={210}
              className="object-cover"
            />
          </div>
        </div>

        {/* Imagem do Profissional */}
      </section>

      {/* Seção de Serviços */}
      <section className="py-16 mx-auto text-center">
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
            <Image
              src={EncanamentoIcon}
              alt="Icone de Encanamento"
              width={48}
              height={48}
              className="w-12 h-12 mx-auto mb-4"
            />
          </div>

          {/* Card de Serviço 2 */}
          <div className="flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-xl font-semibold mb-4">Serviços de Limpeza</h3>
            <p className="text-gray-600 mb-4">
              Limpeza detalhada de residências e comércios
            </p>
            <Image
              src={FaxinaIcon}
              alt="Icone de Limpeza"
              width={48}
              height={48}
              className="w-12 h-12 mx-auto mb-4"
            />
          </div>

          {/* Card de Serviço 3 */}
          <div className="flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-xl font-semibold mb-4">Serviço de Pintura</h3>
            <p className="text-gray-600 mb-4">
              Transforme seu ambiente com pintura profissional
            </p>
            <Image
              src={PinturaIcon}
              alt="Icone de Pintura"
              width={48}
              height={48}
              className="w-12 h-12 mx-auto mb-4"
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
            <Image
              src={EletricistaIcon}
              alt="Icone de eletrecista"
              width={48}
              height={48}
              className="w-12 h-12 mx-auto mb-4"
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
            <Image
              src={MarceneiroIcon}
              alt="Icone de Manutenção"
              width={48}
              height={48}
              className="w-12 h-12 mx-auto mb-4"
            />
          </div>

          {/* Card de Serviço 6 */}
          <div className="flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-xl font-semibold mb-4">
              Serviço de Jardinagem
            </h3>
            <p className="text-gray-600 mb-4">Deixe seu jardim sempre bonito</p>
            <Image
              src={JardinagemIcon}
              alt="Icone de Manutenção"
              width={56}
              height={56}
              className="w-14 h-14 mx-auto mb-4"
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
            <Image
              src={FerramentasIcon}
              alt="Icone de Manutenção"
              width={48}
              height={48}
              className="w-12 h-12 mx-auto mb-4"
            />
          </div>

          {/* Card especial */}
          <div className="border p-8 rounded-lg flex flex-col justify-evenly bg-yellow-500 text-white shadow-md h-full">
            <h3 className="text-xl font-semibold mb-4">
              Somos os melhores neste ramo de serviços.
            </h3>
            <Link href="contato">
              <button
                type="submit"
                className="bg-AzulForte py-2 px-6 rounded-lg hover:bg-blue-700"
              >
                Contrate-nos agora
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
