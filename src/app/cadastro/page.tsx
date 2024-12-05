"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

type Inputs = {
  termo: string;
};

export default function Cadastro() {
  const { handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [tipo, setTipo] = useState<"CLIENTE" | "PRESTADOR" >("CLIENTE"); 
  const [campoProfissional, setCampoProfissional] = useState("");

  async function enviaDados() {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_API}/usuarios/signin`,
        {
          nome: nomeCompleto,
          email,
          senha,
          tipo,
        }
      );
      console.log("Usuário registrado:", response.data);
      if (response.status === 201) {
        alert("Cadastro realizado com sucesso!");
        router.push("/login");
      }
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
    }
  }

  return (
    <main className="background-profissional bg-no-repeat bg-right-bottom">
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-gray-200 text-center text-2xl font-bold mb-6">
            Cadastro
          </h2>

          {/* Seleção de tipo de usuário */}
          <div className="mb-6">
            <p className="text-gray-200 text-lg mb-4">Escolha seu tipo de usuário</p>
            <div className="flex justify-center space-x-6">
              <button
                onClick={() => setTipo("CLIENTE")}
                className={`${
                  tipo === "CLIENTE" ? "bg-teal-500" : "bg-gray-700"
                } text-white py-2 px-6 rounded-full`}
              >
                Cliente
              </button>
              <button
                onClick={() => setTipo("PRESTADOR")}
                className={`${
                  tipo === "PRESTADOR" ? "bg-teal-500" : "bg-gray-700"
                } text-white py-2 px-6 rounded-full`}
              >
                Profissional
              </button>
            </div>
          </div>

          {/* Formulário de acordo com o tipo de usuário */}
          {tipo && (
            <form onSubmit={handleSubmit(enviaDados)}>
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
                value={nomeCompleto}
                onChange={(e) => setNomeCompleto(e.target.value)}
              />
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Senha"
                className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirmar senha"
                className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />

              {/* Campos específicos para Profissional */}
              {tipo === "PRESTADOR" && (
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Especialidade"
                    className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={campoProfissional}
                    onChange={(e) => setCampoProfissional(e.target.value)}
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-Amarelo text-black p-2 rounded hover:bg-AzulForte transition-colors"
              >
                Registrar
              </button>
            </form>
          )}

          <Link
            href="/login"
            className="text-yellow-600 text-sm hover:text-yellow-500"
          >
            Voltar ao login
          </Link>
        </div>
      </div>
    </main>
  );
}
