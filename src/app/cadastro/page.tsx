'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

type FormData = {
  nomeCompleto: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  campoProfissional?: string;
  pais?: string;
  estado?: string;
  cidade?: string;
  dataNascimento?: string;
  telefone?: string;
  descricao?: string;
  imagem?: FileList;
};

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const [tipo, setTipo] = useState<'CLIENTE' | 'PRESTADOR'>('CLIENTE');

  const onSubmit = async (data: FormData) => {
    if (data.senha !== data.confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('nomeCompleto', data.nomeCompleto);
      formData.append('email', data.email);
      formData.append('password', data.senha);
      formData.append('tipo', tipo);
      if (tipo === 'PRESTADOR') {
        formData.append('campoProfissional', data.campoProfissional || '');
        formData.append('pais', data.pais || '');
        formData.append('estado', data.estado || '');
        formData.append('cidade', data.cidade || '');
        formData.append('dataNascimento', data.dataNascimento || '');
        formData.append('telefone', data.telefone || '');
        formData.append('descricao', data.descricao || '');
        if (data.imagem && data.imagem[0]) {
          formData.append('imagem', data.imagem[0]);
        }
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_API}/usuarios/signin`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log('Usuário registrado:', response.data);
      if (response.status === 201) {
        alert('Cadastro realizado com sucesso!');
        router.push('/login');
      }
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
    }
  };

  return (
    <main className="background-profissional bg-no-repeat bg-right-bottom">
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-gray-200 text-center text-2xl font-bold mb-6">
            Cadastro
          </h2>

          <div className="mb-6 relative">
            <div className="flex justify-center space-x-6">
              <button
                onClick={() => setTipo('CLIENTE')}
                className={`${
                  tipo === 'CLIENTE' ? 'text-yellow-500' : 'text-white'
                } py-2 px-6 transition duration-300`}
              >
                Cliente
              </button>
              <button
                onClick={() => setTipo('PRESTADOR')}
                className={`${
                  tipo === 'PRESTADOR' ? 'text-yellow-500' : 'text-white'
                } py-2 px-6 transition duration-300`}
              >
                Profissional
              </button>
            </div>
            <div
              className={`absolute bottom-0 left-0 right-0 h-1 bg-yellow-500 transition-transform duration-300 ${
                tipo === 'CLIENTE'
                  ? 'transform translate-x-0'
                  : 'transform translate-x-full'
              }`}
              style={{
                width: tipo === 'CLIENTE' ? '50%' : '50%',
              }}
            />
          </div>

          {tipo && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
                {...register('nomeCompleto', { required: true })}
              />
              {errors.nomeCompleto && (
                <span className="text-red-500">
                  Nome completo é obrigatório
                </span>
              )}

              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email é obrigatório</span>
              )}

              <input
                type="password"
                placeholder="Senha"
                className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
                {...register('senha', { required: true })}
              />
              {errors.senha && (
                <span className="text-red-500">Senha é obrigatória</span>
              )}

              <input
                type="password"
                placeholder="Confirmar senha"
                className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
                {...register('confirmarSenha', { required: true })}
              />
              {errors.confirmarSenha && (
                <span className="text-red-500">
                  Confirmar senha é obrigatório
                </span>
              )}

              {/* Campos específicos para Profissional */}
              {tipo === 'PRESTADOR' && (
                <>
                  <input
                    type="text"
                    placeholder="Especialidade"
                    className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
                    {...register('campoProfissional')}
                  />
                  <input
                    type="text"
                    placeholder="País"
                    className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
                    {...register('pais')}
                  />
                  <input
                    type="text"
                    placeholder="Estado"
                    className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
                    {...register('estado')}
                  />
                  <input
                    type="text"
                    placeholder="Cidade"
                    className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
                    {...register('cidade')}
                  />
                  <input
                    type="date"
                    placeholder="Data de Nascimento"
                    className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
                    {...register('dataNascimento')}
                  />
                  <input
                    type="tel"
                    placeholder="Telefone"
                    className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
                    {...register('telefone')}
                  />
                  <textarea
                    placeholder="Descrição"
                    className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
                    {...register('descricao')}
                  />
                  <input
                    type="file"
                    className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400"
                    {...register('imagem')}
                  />
                </>
              )}

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded transition-colors"
              >
                Registrar
              </button>
            </form>
          )}
          <div className="mt-2 justify-items-center">
            <p className="text-gray-200">
              Já tem uma conta?
              <Link
                href="/login"
                className="text-yellow-500 text-sm hover:text-yellow-600 ml-2"
              >
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
