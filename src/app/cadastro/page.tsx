"use client";
import {useState} from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"
import axios from "axios";

type inputs = {
  termo: string
}
export default function Cadastro() {
  const {handleSubmit} = useForm<inputs>()
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [NomeCompleto, setNomeCompleto] = useState("");
  const [tipo, setTipo] = useState("CLIENTE");

   async function enviaDados () {
    
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_API}/usuarios/signin`,
        {
          nome: NomeCompleto,
          email,
          senha,
          tipo,
        }
      );
      console.log("Usuário registrado:", response.data);
      if (response.status == 201){
        alert("Cadasto realizado com sucesso!")
        router.push("/login")        
      }
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
    }
  };

  return (
    <main className="background-profissional bg-no-repeat bg-right-bottom">
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-gray-200 text-center text-2xl font-bold mb-6">
            Cadastro
          </h2>
          <form onSubmit={handleSubmit(enviaDados)}>
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
              value={NomeCompleto}
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

            <div className="mb-4">
              <label className="text-gray-200">Tipo de usuário:</label>
              <div className="flex mt-2">
                <label className="text-gray-200 mr-4">
                  <input
                    type="radio"
                    value="CLIENTE"
                    checked={tipo === "CLIENTE"}
                    onChange={(e) => setTipo(e.target.value)}
                    className="mr-2"
                  />
                  Cliente
                </label>
                <label className="text-gray-200">
                  <input
                    type="radio"
                    value="PRESTADOR"
                    checked={tipo === "PRESTADOR"}
                    onChange={(e) => setTipo(e.target.value)}
                    className="mr-2"
                  />
                  Prestador
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-Amarelo text-black p-2 rounded hover:bg-AzulForte transition-colors"
            >
              Registrar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
