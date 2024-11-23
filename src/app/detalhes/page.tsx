import React from "react";
import Image from "next/image";

export default function servicoDetalhes() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative bg-blue-900 py-24 flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">Entre em contato</h1>
      </div>
      <div className="container mx-auto max-w-screen-lg py-16 px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold mb-6">
            João Silva Serviços de reforma residencial
          </h2>
          <Image
            src="/encanador_com_mulher.png"
            className="rounded-lg mb-6 w-[500] h-[300]"
            alt="João Silva Serviços de reforma residencial"
            width={500}
            height={300}
          />
          <div className="flex flex-col bg-white justify-evenly border p-8 rounded-lg shadow-lg max-h-40">
            <h3 className="text-xl font-semibold mb-4">Fale com João Silva através do whats</h3>
            <p className="text-lg font-semibold mb-4">(53) 99643 - 0964, ou mande uma mensagem para ele</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Fale com João Silva agora mesmo!
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Seu nome*"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Seu e-mail*"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="Seu número*"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Digite sua mensagem"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-white font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              Obtenha um orçamento
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}