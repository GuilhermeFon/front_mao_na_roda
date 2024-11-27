import Link from "next/link";
import Image from "next/image";

import EncanadorImage from "@/assets/encanador.png";
import CasalImage from "@/assets/casal.png";
import EncanadorTuboImage from "@/assets/encanador_com_tubo.png";
import PersonImage from "@/assets/perfil.jpg";
import DocumentIcon from "@/assets/icones/icone_docu_check_branco.svg";
import ProfileIcon from "@/assets/icones/icone_perfil_check.svg";

export function Main() {
  return (
    <main className="w-screen h-fit">
      <div className="max-w-screen-lg mt-20 mx-auto grid grid-cols-[65%_35%] ">
        <div className="flex flex-col justify-evenly min-h-[100vh]  ">
          <div className="max-w-[90%] mx-auto h-fit rounded-3xl">
            {" "}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {" "}
              Joâo Silva - Encanador
            </h1>{" "}
            <Image
              className="max-w-full mx-auto h-auto rounded-3xl"
              src={EncanadorImage}
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="h-fit max-w-[90%] mx-auto flex flex-col my-8 justify-evenly">
            <p>
              João Silva é um profissional dedicado com mais de 10 anos de
              experiência em serviços de manutenção residencial e comercial.
              Especializado em reparos hidráulicos e reformas gerais, João traz
              um olhar técnico e detalhista a cada trabalho, garantindo a
              satisfação dos clientes. Com uma abordagem personalizada e
              comprometida com a qualidade, ele é uma peça fundamental no
              projeto Mão na Roda, conectando pessoas que precisam de soluções
              práticas e eficientes para suas casas ou negócios. João se destaca
              por sua pontualidade, competência e dedicação em cada serviço
              realizado.
            </p>
            <div className="my-4">
              <h4 className="text-xl font-semibold">Qualificações</h4>
              <ul className="flex flex-wrap gap-4 mt-2">
                <li className="bg-blue-100 p-2 rounded-md font-bold">
                  Curso de Manutenção Predial
                </li>
                <li className="bg-blue-100 p-2 rounded-md font-bold">
                  Certificação em Segurança no Trabalho
                </li>
                <li className="bg-blue-100 p-2 rounded-md font-bold">
                  Curso de Instalação Elétrica Residencial{" "}
                </li>
                <li className="bg-blue-100 p-2 rounded-md font-bold">
                  Formação em Hidráulica{" "}
                </li>
                <li className="bg-blue-100 p-2 rounded-md font-bold">
                  Workshop de Sustentabilidade e Eficiência Energética
                </li>
                <li className="bg-blue-100 p-2 rounded-md font-bold">
                  Certificado de Atendimento ao Cliente
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[90%] container mx-auto max-h-64 flex justify-evenly">
            <Image
              className="max-w-[45%] h-auto rounded-3xl"
              src={CasalImage}
              alt=""
              width={500}
              height={500}
            />{" "}
            <Image
              className="max-w-[45%] h-auto rounded-3xl"
              src={EncanadorTuboImage}
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="col-start-2 h-fit">
          <div className="rounded-md w-[90%] flex flex-col justify-evenly items-center  mt-14 mx-auto shadow h-96">
            <Image
              className="rounded-full max-w-20"
              src={PersonImage}
              alt=""
              width={80}
              height={80}
            />

            <div className=" container flex flex-col justify-between max-w-fit items-center max-h-20">
              <h5 className="text-xl font-semibold text-gray-700 mb-2">
                João Silva{" "}
              </h5>
              <p className="text-base text-gray-600 ">Encanador</p>
            </div>

            <Link
              href="/buy"
              className="bg-green-400 w-[80%] px-0 rounded-full hover:text-blue-700 text-white text-base text-center font-bold  py-2"
            >
              Ver telefone
            </Link>
          </div>
          <div className="rounded-md w-[90%] flex flex-col  justify-evenly items-center  mt-14 mx-auto shadow h-fit">
            <div className="flex w-fit pt-6 pb-4 ">
              <div className="flex flex-col px-2 w-fit items-center">
                <Image
                  className="max-w-7"
                  src={DocumentIcon}
                  alt=""
                  width={28}
                  height={28}
                />
                <p className="text-[12px] text-gray-600 leading-relaxed">
                  Certificações verificadas
                </p>
              </div>
              <div className="flex flex-col px-2 w-fit items-center">
                <Image
                  className="max-w-7"
                  src={ProfileIcon}
                  alt=""
                  width={28}
                  height={28}
                />
                <p className="text-[12px] text-gray-600 leading-relaxed">
                  Perfil verificado
                </p>
              </div>
            </div>
            <div className="w-[90%] pt-2 pb-6">
              <div className=" h-5 flex container items-center bg-gray-200 rounded-full">
                {" "}
                <div className="ms-2 rounded-s-md h-[40%] w-[90%] bg-green-400"></div>
              </div>
              <div className=" flex container justify-between mt-1 text-[10px]">
                <p>Pouco Confiável</p>
                <p>Confiável</p>
                <p className="font-bold underline">Muito Confiável</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
