"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useClienteStore } from "@/context/cliente";
import { useEffect } from "react";



export default function perfil() {

  const { cliente } = useClienteStore()
  

  useEffect(() => {

    async function buscaCliente() {

      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/${cliente.id}`,{
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${cliente.token}` 
        },
        method: "GET",
      })
      console.log(response.status)
      if (response.status == 200) {
        const dados = await response.json()
        
      }
    }
    
    buscaCliente()
  }, []);



  

  return (
    <main>
      <section className="max-w-screen-xl mt-20 mx-auto grid grid-cols-[50%_50%] ">
        <div className=" min-h-[100vh]  ">
          <div className="w-full flex flex-col  mx-auto h-[430px] bg-Cinza2 shadow rounded-lg">

            <form className="max-w-full flex flex-col justify-between max-h-full flex-wrap ms-5 ">
              <h1 className="font-bold mb-2 text-white mt-5 text-xl">Informações da conta</h1>
              <div className="mb-5 max-w-[50%]">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-white">{cliente.nome}</label>
                <input type="name" id="name" className="bg-Azul2 border border-Azul2  text-sm rounded-lg focus:ring-Azul2 focus:border-Azul2 block w-full p-2.5 " placeholder="Seu nome" required />
              </div>
              <div className="mb-5 max-w-[50%]">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">{}</label>
                <input type="email" id="email" className="bg-Azul2 border border-Azul2  text-sm rounded-lg focus:ring-Azul2 focus:border-Azul2 block w-full p-2.5 " placeholder="seu_email@exemplo.com" required />
              </div>
              <div className="mb-5 max-w-[50%]">
                <label htmlFor="telefone" className="block mb-2 text-sm font-medium text-white dark:text-white">{}</label>
                <input type="telefone" id="telefone" className="bg-Azul2 border border-Azul2  text-sm rounded-lg focus:ring-Azul2 focus:border-Azul2 block w-full p-2.5 " placeholder="(00) 00000-0000" required />
              </div>
              <div className="mb-5 max-w-[50%]">
                <label htmlFor="nascimento" className="block mb-2 text-sm font-medium text-white dark:text-white">{}</label>
                <input type="nascimento" id="nascimento" className="bg-Azul2 border border-Azul2  text-sm rounded-lg focus:ring-Azul2 focus:border-Azul2 block w-full p-2.5 " placeholder="06/03/1990" required />
              </div>

              <div className="max-w-[45%] flex flex-col justify-between py-5  h-full ">
                <div>
                  <label htmlFor="desc" className="block mb-2 text-sm font-medium text-white dark:text-white">{}</label>
                  <textarea id="desc" rows={6} className="bg-Azul2 border border-Azul2  text-sm rounded-lg focus:ring-Azul2 focus:border-Azul2 block w-full p-2.5 " placeholder="Diga algo sobre você aos seus clientes..."></textarea>
                </div>
                <button type="submit" className="text-black font-bold mt-5 min-w-[50%] mx-auto bg-Amarelo hover:bg-AzulMaisForte focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar</button>
              </div>



            </form>


          </div>
          {/* <div className="h-fit max-w-[90%] mx-auto flex flex-col my-8 justify-evenly"> */}


        </div>


        <div className="col-start-2 h-fit">
          <div className="rounded-xl w-[90%] flex flex-col justify-between bg-Cinza2   mx-auto shadow h-64">
            <div className="w-[85%] mt-5 mx-auto flex justify-between">
              <div className="">
                <img className="rounded-full w-36  h-36 " src="/img181.jpg" alt="" />
              </div>
              <div className="flex flex-col mt-2 justify-around items-end h-36 me-5 w-fit">
                <h1 className="text-white text-4xl font-bold">{cliente.nome}</h1>
                <div className="flex h-7 w-fit">
                  <img className="mx-1 w-10 h-10" src="/icones/icone_star40px.svg" alt="" />
                  <img className="mx-1 w-10 h-10" src="/icones/icone_star40px.svg" alt="" />
                  <img className="mx-1 w-10 h-10" src="/icones/icone_star40px.svg" alt="" />
                  <img className="mx-1 w-10 h-10" src="/icones/icone_star40px.svg" alt="" />
                  <img className="mx-1 w-10 h-10" src="/icones/icone_halfstar40px.svg" alt="" />
                  
                  
                </div>
                

                  <p className="text-white text-sm">50 serviços</p>
                
              </div>

            </div>
            <div className="w-[90%] mb-2 mx-auto">
              <p className="text-white text-sm">Plano: Ouro</p>
            </div>





          </div>

          <div className="rounded-xl w-[90%] flex flex-col bg-AzulMaisForte  justify-evenly items-center  mt-14 mx-auto shadow h-fit">
            <div className="w-[90%] flex justify-around flex-col h-[360px] items-center pt-2 pb-6">
              <div className=" h-14 w-[90%] flex  flex-col justify-center text-center  bg-Amarelo rounded-full">
                {" "}
                <h2 className="font-bold">Avaliação Geral</h2>

              </div>
              {/* avaliações estrelas */}
              <div className=" flex flex-col items-center">

                <div className="text-center text-white">
                  <p className="text-xs">4,5 de 5</p>
                  <p className="text-sm">50 avaliações</p>

                </div>
              </div>

              <div className="flex  justify-between w-[90%]  ">
                <div className="flex flex-col px-2 w-20 text-center items-center">
                  <img
                    className="max-w-9"
                    src="./icones/icone_docu_check_branco.svg"
                    alt=""
                  />
                  <p className="text-[12px] text-white leading-relaxed">
                    Qualificações verificadas
                  </p>
                </div>
                <div className="flex flex-col text-center px-2 w-20 items-center">
                  <img
                    className="max-w-9"
                    src="./icones/icone_50_branco.svg"
                    alt=""
                  />
                  <p className="text-[12px] text-white leading-relaxed">
                    50 Serviços
                  </p>
                </div>
                <div className="flex flex-col text-center px-2 w-20 items-center">
                  <img
                    className="max-w-9"
                    src="./icones/icone_perfil_branco.svg"
                    alt=""
                  />
                  <p className="text-[12px] text-white leading-relaxed">
                    Perfil verificado
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div className="rounded-xl w-[90%] flex flex-col bg-CinzaBg  justify-evenly items-center  mt-14 mx-auto shadow h-fit">
            <div className="w-[90%] flex justify-around flex-col h-fit items-center pt-2 pb-6">
              <Link
                href="/buy"
                className="bg-AzulMaisForte h-11 my-7 w-[80%] px-0 rounded-full hover:text-blue-700 text-white text-base text-center font-bold  py-2"
              >
                Galeria
              </Link>
              <Link
                href="/buy"
                className="bg-AzulMaisForte h-11 w-[80%] px-0 rounded-full hover:text-blue-700 text-white text-base text-center font-bold  py-2"
              >
                Avaliações
              </Link>
              {/* <Link
                href="/buy"
                className="bg-AzulMaisForte h-11 w-[80%] px-0 rounded-full hover:text-blue-700 text-white text-base text-center font-bold  py-2"
              >
                Ver horários disponíveis
              </Link> */}




            </div>

          </div>

        </div>
      </section>
    </main>
  );
};


