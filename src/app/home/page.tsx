import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ProfissionalImage from '@/assets/imagem_profissional.png';
import EncanadorCasal from '@/assets/encanador_com_mulher.png';
import EncanamentoIcon from '@/assets/icones/icone_encanamento.svg';
import FaxinaIcon from '@/assets/icones/icone_faxina.svg';
import PinturaIcon from '@/assets/icones/icone_pintura.svg';
import EletricistaIcon from '@/assets/icones/icone_eletrecista.svg';
import MarceneiroIcon from '@/assets/icones/icone_martelo.svg';
import JardinagemIcon from '@/assets/icones/icone_pa.svg';
import FerramentasIcon from '@/assets/icones/icone_ferramentas.svg';
import FeatureGrid from '@/components/FeatureGrid';
import Profissional from '@/assets/maria_encanadora.png';
import Cliente from '@/assets/cliente.jpg';

export function Home() {
  return (
    <main>
      <section className="bg-blue-900 h-fit text-white text-start">
        <div className="container flex justify-between items-center mx-auto">
          <div>
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
              className="bg-yellow-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-yellow-600"
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
      </section>

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

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-6">
        {/* Card Profissionais */}
        <div className="flex bg-white text-gray-800 rounded-lg shadow-lg w-full max-w-lg lg:max-w-2xl">
          <div className="w-3/4 p-6">
            <h3 className="text-2xl font-bold mb-4">Para profissionais</h3>
            <p className="mb-6">
              Divulgue seus serviços, conecte-se com clientes e amplie sua rede. Com
              nossa plataforma, você gerencia seus atendimentos de forma prática e
              aumenta suas oportunidades de trabalho.
            </p>
            <button className="bg-yellow-500 rounded-lg hover:bg-yellow-600 text-white py-2 px-6 transition-colors">
              Saiba mais
            </button>
          </div>
          <div className="w-1/4 flex justify-end items-center">
            <Image
              src={Profissional}
              alt="Profissional"
              className="w-full h-full rounded-r-lg"
            />
          </div>
        </div>

        {/* Card Clientes */}
        <div className="flex bg-white text-gray-800 rounded-lg shadow-lg w-full max-w-lg lg:max-w-2xl">
          <div className="w-3/4 p-6">
            <h3 className="text-2xl font-bold mb-4">Para clientes</h3>
            <p className="mb-6">
              Encontre profissionais qualificados de maneira rápida e segura. Contrate
              serviços como encanadores, eletricistas e pintores com praticidade e
              confiança.
            </p>
            <button className="bg-yellow-500 rounded-lg hover:bg-yellow-600 text-white py-2 px-6 transition-colors">
              Saiba mais
            </button>
          </div>
          <div className="w-1/4 flex justify-end items-center">
            <Image
              src={Cliente}
              alt="Cliente"
              className="w-full h-full rounded-r-lg"
            />
          </div>
        </div>
      </div>


      <div className="text-center my-10">
        <FeatureGrid />
      </div>
      <section className="bg-blue-100 py-10 mt-20">
        <div className="max-w-screen-lg mx-auto text-center lg:flex lg:justify-between">
          <div className="lg:w-1/2 lg:text-left">
            <h2 className="text-2xl font-bold mb-4">Junte-se à nossa rede de profissionais</h2>
            <p className="text-lg text-gray-700 mb-4">
              Se você é um profissional qualificado com experiência em serviços gerais e está interessado em expandir sua prática, conectar-se com novos clientes, venha fazer parte da nossa plataforma.
            </p>
            <h3 className="text-xl font-semibold mb-2">Por que se juntar a nós?</h3>
            <ul className="list-disc text-left ml-6 mb-4">
              <li>Acesso a uma base de clientes diversificada</li>
              <li>Ferramentas e suporte dedicados</li>
              <li>Flexibilidade e controle</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              Gerencie seus serviços e horários de forma eficiente e de acordo com suas preferências.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-5 ml-9">
            <Image
              src={EncanadorCasal}
              alt="Profissional"
              width={500}
              height={250}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="text-center mt-6">
          <Link
            href="cadastro"
            className="inline-block bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded-full hover:bg-blue-700"
          >
            Cadastre-se Agora
          </Link>
        </div>

      </section>
    </main>
  );
}
