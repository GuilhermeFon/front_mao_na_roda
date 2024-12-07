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
  cpf: string;
  pais: string;
  estado: string;
  cidade: string;
  dataNascimento: string;
  celular: string;
  imagem: FileList;
  profissao?: string;
  descricao?: string;
  linkedin?: string;
};

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const router = useRouter();
  const [tipo, setTipo] = useState<'CLIENTE' | 'PRESTADOR'>('CLIENTE');

  const handleTipoChange = (novoTipo: 'CLIENTE' | 'PRESTADOR') => {
    setTipo(novoTipo);
    reset();
  };

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
        formData.append('profissao', data.profissao || '');
        formData.append('pais', data.pais || '');
        formData.append('estado', data.estado || '');
        formData.append('cpf', data.cpf || '');
        formData.append('cidade', data.cidade || '');
        formData.append('dataNascimento', data.dataNascimento || '');
        formData.append('celular', data.celular || '');
        formData.append('descricao', data.descricao || '');
        formData.append('linkedin', data.linkedin || '');

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
    <main className="bg-no-repeat bg-right-bottom">
      <div className="flex justify-center items-start min-h-screen p-4">
        <div className="p-8 rounded-lg w-full max-w-md">
          <h2 className="text-black text-center text-2xl mb-6">Cadastro</h2>

          <div className="mb-6 relative">
            <div className="w-full flex justify-around">
              <button
                onClick={() => handleTipoChange('CLIENTE')}
                className={`${
                  tipo === 'CLIENTE' ? 'text-yellow-500' : 'text-black'
                } py-2 px-6 transition duration-300 w-1/2`}
              >
                Cliente
              </button>
              <button
                onClick={() => handleTipoChange('PRESTADOR')}
                className={`${
                  tipo === 'PRESTADOR' ? 'text-yellow-500' : 'text-black'
                } py-2 px-6 transition duration-300 w-1/2`}
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
              {tipo === 'PRESTADOR' ? (
                <>
                  {errors.nomeCompleto && (
                    <span className="text-sm text-red-500">
                      Nome completo é obrigatório
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="Nome completo"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('nomeCompleto', { required: true })}
                  />

                  {errors.dataNascimento && (
                    <span className="text-sm text-red-500">
                      Data de Nascimento é obrigatória
                    </span>
                  )}
                  <input
                    type="date"
                    placeholder="Data de Nascimento"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('dataNascimento', { required: true })}
                  />

                  {errors.celular && (
                    <span className="text-sm text-red-500">
                      Celular é obrigatório
                    </span>
                  )}
                  <input
                    type="tel"
                    placeholder="Celular"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('celular', { required: true })}
                  />

                  {errors.cpf && (
                    <span className="text-sm text-red-500">
                      CPF é obrigatório
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="CPF"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('cpf', { required: true })}
                  />

                  {errors.pais && (
                    <span className="text-sm text-red-500">
                      País é obrigatório
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="País"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('pais', { required: true })}
                  />

                  {errors.estado && (
                    <span className="text-sm text-red-500">
                      Estado é obrigatório
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="Estado"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('estado', { required: true })}
                  />

                  {errors.cidade && (
                    <span className="text-sm text-red-500">
                      Cidade é obrigatória
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="Cidade"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('cidade', { required: true })}
                  />

                  {errors.profissao && (
                    <span className="text-sm text-red-500">
                      Profissão é obrigatória
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="Profissão"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('profissao', { required: true })}
                  />

                  <input
                    type="text"
                    placeholder="Perfil no LinkedIn"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('linkedin')}
                  />

                  {errors.email && (
                    <span className="text-sm text-red-500">
                      Email é obrigatório
                    </span>
                  )}
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('email', { required: true })}
                  />

                  {errors.senha && (
                    <span className="text-sm text-red-500">
                      Senha é obrigatória
                    </span>
                  )}
                  <input
                    type="password"
                    placeholder="Senha"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('senha', { required: true })}
                  />

                  {errors.confirmarSenha && (
                    <span className="text-sm text-red-500">
                      Confirmar senha é obrigatória
                    </span>
                  )}
                  <input
                    type="password"
                    placeholder="Confirmar senha"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('confirmarSenha', { required: true })}
                  />

                  <textarea
                    placeholder="Descrição"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('descricao')}
                  />
                  <input
                    type="file"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('imagem', { required: true })}
                  />
                </>
              ) : (
                <>
                  {errors.nomeCompleto && (
                    <span className="text-sm text-red-500">
                      Nome completo é obrigatório
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="Nome completo"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('nomeCompleto', { required: true })}
                  />

                  {errors.dataNascimento && (
                    <span className="text-sm text-red-500">
                      Data de Nascimento é obrigatória
                    </span>
                  )}
                  <input
                    type="date"
                    placeholder="Data de Nascimento"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('dataNascimento', { required: true })}
                  />

                  {errors.celular && (
                    <span className="text-sm text-red-500">
                      Celular é obrigatório
                    </span>
                  )}
                  <input
                    type="tel"
                    placeholder="Celular"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('celular', { required: true })}
                  />

                  {errors.cpf && (
                    <span className="text-sm text-red-500">
                      CPF é obrigatório
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="CPF"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('cpf', { required: true })}
                  />

                  {errors.pais && (
                    <span className="text-sm text-red-500">
                      País é obrigatório
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="País"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('pais', { required: true })}
                  />

                  {errors.estado && (
                    <span className="text-sm text-red-500">
                      Estado é obrigatório
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="Estado"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('estado', { required: true })}
                  />

                  {errors.cidade && (
                    <span className="text-sm text-red-500">
                      Cidade é obrigatória
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="Cidade"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('cidade', { required: true })}
                  />

                  {errors.email && (
                    <span className="text-sm text-red-500">
                      Email é obrigatório
                    </span>
                  )}
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('email', { required: true })}
                  />

                  {errors.senha && (
                    <span className="text-sm text-red-500">
                      Senha é obrigatória
                    </span>
                  )}
                  <input
                    type="password"
                    placeholder="Senha"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('senha', { required: true })}
                  />

                  {errors.confirmarSenha && (
                    <span className="text-sm text-red-500">
                      Confirmar senha é obrigatória
                    </span>
                  )}
                  <input
                    type="password"
                    placeholder="Confirmar senha"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('confirmarSenha', { required: true })}
                  />

                  <input
                    type="file"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('imagem', { required: true })}
                  />
                </>
              )}

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 font-semibold text-white p-2 rounded transition-colors"
              >
                Registrar
              </button>
            </form>
          )}
          <div className="mt-2 justify-items-center">
            <p className="text-black">
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
