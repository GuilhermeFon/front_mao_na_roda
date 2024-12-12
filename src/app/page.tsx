import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUsers, FaTools, FaCogs } from 'react-icons/fa';

import Cliente from '@/assets/cliente.jpg';
import EncanadorCasal from '@/assets/encanador_com_mulher.png';
import EletricistaIcon from '@/assets/icones/icone_eletrecista.svg';
import EncanamentoIcon from '@/assets/icones/icone_encanamento.svg';
import FaxinaIcon from '@/assets/icones/icone_faxina.svg';
import FerramentasIcon from '@/assets/icones/icone_ferramentas.svg';
import MarceneiroIcon from '@/assets/icones/icone_martelo.svg';
import JardinagemIcon from '@/assets/icones/icone_pa.svg';
import PinturaIcon from '@/assets/icones/icone_pintura.svg';
import ProfissionalImage from '@/assets/imagem_profissional.png';
import Profissional from '@/assets/maria_encanadora.png';
import FeatureGrid from '@/components/FeatureGrid';

const Faq = dynamic(() => import('@/components/Faq'), { ssr: false });

export default async function Home() {
  return (
    <main>
      <section className="bg-[#082D53] text-white text-start">
        <div className="container flex flex-col lg:flex-row justify-between items-center mx-auto px-2 pb-10 lg:pb-0 pt-10">
          <div className="lg:mr-60 flex-grow">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Conectando <span className="text-yellow-400"> você </span>
              aos profissionais ideais!
            </h1>
            <p className="text-lg mb-8">
              Encontre rapidamente os melhores especialistas para suas reformas
              e reparos, com a confiança e qualidade que você merece!
            </p>
            <Link
              href="/servicos"
              className="bg-yellow-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              DESCUBRA AGORA!
            </Link>
          </div>

          <div className="hidden lg:block">
            <Image
              src={ProfissionalImage}
              alt="Profissional"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container px-2 py-20 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Tudo o que você precisa, em um só lugar!
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
              Não perca tempo! Encontre quem entende do assunto!
            </h3>
            <Link
              href="/servicos"
              className="bg-[#1D69B7] py-2 px-6 rounded-lg hover:bg-[#082D53] transition-colors"
            >
              Encontre um profissional
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-2 py-20 flex flex-col lg:flex-row justify-between  items-center gap-20">
        {/* Card Profissionais */}
        <div className="flex bg-background text-gray-800 rounded-lg shadow-lg w-full max-w-lg lg:max-w-2xl h-96">
          <div className="w-3/4 p-6">
            <h3 className="text-2xl font-bold mb-4">Para profissionais</h3>
            <p className="mb-8">
              {' '}
              {/* Aumenta a margem inferior */}
              Divulgue seus serviços, conecte-se com clientes e amplie sua rede.
              Com nossa plataforma, você gerencia seus atendimentos de forma
              prática e aumenta suas oportunidades de trabalho.
            </p>
            <Link
              href="cadastro"
              className="bg-yellow-500 rounded-lg hover:bg-yellow-600 text-white py-2 px-6 transition-colors mt-4"
            >
              {' '}
              {/* Adiciona margem superior */}
              Saiba mais
            </Link>
          </div>
          <div className="w-2/4 flex justify-end items-center">
            <Image
              src={Profissional}
              alt="Profissional"
              className="w-full h-full rounded-r-lg object-cover"
            />
          </div>
        </div>

        {/* Card Clientes */}
        <div className="flex bg-background text-gray-800 rounded-lg shadow-lg w-full max-w-lg lg:max-w-2xl h-96">
          <div className="w-3/4 p-6">
            <h3 className="text-2xl font-bold mb-4">Para clientes</h3>
            <p className="mb-8">
              {' '}
              {/* Aumenta a margem inferior */}
              Encontre profissionais qualificados de maneira rápida e segura.
              Contrate serviços como encanadores, eletricistas e pintores com
              praticidade e confiança.
            </p>
            <Link
              href="cadastro"
              className="bg-yellow-500 rounded-lg hover:bg-yellow-600 text-white py-2 px-6 transition-colors mt-4"
            >
              {' '}
              {/* Adiciona margem superior */}
              Saiba mais
            </Link>
          </div>
          <div className="w-2/4 flex justify-end items-center">
            <Image
              src={Cliente}
              alt="Cliente"
              className="w-full h-full rounded-r-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-2 py-20 text-center">
        <FeatureGrid />
      </section>
      <section className="bg-blue-100 mt-20">
        <div className="container mx-auto px-2 py-20">
          <div className="text-center lg:flex lg:justify-between">
            <div className="lg:w-1/2 lg:text-left">
              <h2 className="text-2xl font-bold mb-4">
                Junte-se à nossa rede de profissionais
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Se você é um profissional qualificado com experiência em
                serviços gerais e está interessado em expandir sua prática,
                conectar-se com novos clientes, venha fazer parte da nossa
                plataforma.
              </p>
              <h3 className="text-xl font-semibold mb-2">
                Por que se juntar a nós?
              </h3>
              <ul className="list-none text-left ml-6 mb-4 space-y-2">
                <li className="flex items-center">
                  <FaUsers className="mr-4 text-yellow-500 text-3xl" /> Acesso a
                  uma base de clientes diversificada
                </li>
                <li className="flex items-center">
                  <FaTools className="mr-4 text-yellow-500 text-3xl" />{' '}
                  Ferramentas e suporte dedicados
                </li>
                <li className="flex items-center">
                  <FaCogs className="mr-4 text-yellow-500 text-3xl" />{' '}
                  Flexibilidade e controle
                </li>
              </ul>
              <p className="text-lg text-gray-700 mr-4">
                Gerencie seus serviços e horários de forma eficiente e de acordo
                com suas preferências.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-5 ml-9">
              <Image
                src={EncanadorCasal}
                alt="Profissional"
                width={500}
                height={250}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="cadastro"
              className="inline-block bg-[#1D69B7] text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-[#082D53] transition-colors"
            >
              Junte-se a nós
            </Link>
          </div>
        </div>
      </section>
      <Faq />
    </main>
  );
}
