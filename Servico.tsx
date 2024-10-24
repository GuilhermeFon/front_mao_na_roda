import Link from "next/link";

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
            <img
              className="max-w-full mx-auto h-auto rounded-3xl"
              src="./encanador.png"
              alt=""
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
            <img
              className="max-w-[45%] h-auto rounded-3xl"
              src="./casal.png"
              alt=""
            />{" "}
            <img
              className="max-w-[45%] h-auto rounded-3xl"
              src="./encanador_com_tubo.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-start-2 h-fit">
          <div className="rounded-md w-[90%] flex flex-col justify-evenly items-center  mt-14 mx-auto shadow h-96">
            <img className="rounded-full max-w-20" src="./img181.png" alt="" />
            <div className="w-[90%]">
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
            <Link
              href="/buy"
              className="bg-green-400 w-[80%] px-0 rounded-full hover:text-blue-700 text-white text-base text-center font-bold  py-2"
            >
              Ver telefone
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
