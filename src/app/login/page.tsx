'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useClienteStore } from '@/context/cliente';


interface LoginFormInputs {
  email: string;
  senha: string;
  tipo: 'cliente' | 'prestador';
  manter?: boolean;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const { logaCliente } = useClienteStore();
  const router = useRouter();
  const [tipo, setTipo] = useState<'cliente' | 'prestador'>('cliente');

  async function verificaLogin(data: {
    email: string;
    senha: string;
    tipo: 'cliente' | 'prestador';
  }) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/${tipo}/login`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ email: data.email, senha: data.senha }),
        },
      );

      if (response.status === 200) {
        const dados = await response.json();
        logaCliente(dados);
        localStorage.setItem('client_key', dados.id);
        localStorage.setItem('client_token', dados.token);

        router.push('/');
      } else {
        alert('Erro... Login ou Senha incorretos');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Tente novamente mais tarde.');
    }
  }

  return (
    <main className="bg-no-repeat bg-right-bottom">
      <div className="flex justify-center items-start min-h-screen p-4">
        <div className="p-8 rounded-lg w-full max-w-md">
          <h2 className="text-black text-center text-2xl mb-6">Login</h2>

          <div className="mb-6 relative">
            <div className="w-full flex justify-around">
              <button
                onClick={() => setTipo('cliente')}
                className={`${
                  tipo === 'cliente' ? 'text-yellow-500' : 'text-black'
                } py-2 px-6 transition duration-300 w-1/2`}
              >
                Cliente
              </button>
              <button
                onClick={() => setTipo('prestador')}
                className={`${
                  tipo === 'prestador' ? 'text-yellow-500' : 'text-black'
                } py-2 px-6 transition duration-300 w-1/2`}
              >
                Profissional
              </button>
            </div>
            <div
              className={`absolute bottom-0 left-0 right-0 h-1 bg-yellow-500 transition-transform duration-300 ${
                tipo === 'cliente'
                  ? 'transform translate-x-0'
                  : 'transform translate-x-full'
              }`}
              style={{
                width: tipo === 'cliente' ? '50%' : '50%',
              }}
            />
          </div>

          <form onSubmit={handleSubmit(verificaLogin)}>
            <input type="hidden" value={tipo} {...register('tipo')} />

            {errors.email && (
              <span className="text-sm text-red-500">Email é obrigatório</span>
            )}
            <input
              type="email"
              placeholder="E-mail"
              className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
              {...register('email', { required: true })}
            />

            {errors.senha && (
              <span className="text-sm text-red-500">Senha é obrigatória</span>
            )}
            <input
              type="password"
              placeholder="Senha"
              className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
              {...register('senha', { required: true })}
            />

            <div className="flex justify-between items-center mb-4">
              <Link
                href="esqueceuSenha"
                className="text-yellow-500 text-sm hover:text-yellow-600 transition-colors"
              >
                Esqueceu a senha?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-yellow-500 text-dark p-2 rounded hover:bg-yellow-600 transition-colors "
            >
              Entrar
            </button>
          </form>

          <div className="text-center mt-8">
            <p className="text-black">
              Não tem uma conta?
              <Link
                href="cadastro"
                className="text-yellow-500 text-sm hover:text-yellow-600 ml-2 transition-colors"
              >
                Cadastre-se aqui
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
