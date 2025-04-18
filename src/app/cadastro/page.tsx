'use client';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { DatePickerDemo } from '@/components/Datepicker';
import MultiSelect from '@/components/ui/multiSelect';

interface Profession {
  id: string;
  label: string;
}

type FormData = {
  nome: string;
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
  profissoes?: string[];
  descricao?: string;
  linkedin?: string;
};

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FormData>();

  const professions: Profession[] = [
    { id: 'eletricista', label: 'Eletricista' },
    { id: 'encanador', label: 'Encanador(a)' },
    { id: 'pintor', label: 'Pintor(a)' },
    { id: 'pedreiro', label: 'Pedreiro(a)' },
    { id: 'carpinteiro', label: 'Carpinteiro(a)' },
    { id: 'marceneiro', label: 'Marceneiro(a)' },
    { id: 'serralheiro', label: 'Serralheiro(a)' },
    { id: 'gesseiro', label: 'Gesseiro(a)' },
    { id: 'azulejista', label: 'Azulejista' },
    { id: 'jardineiro', label: 'Jardineiro(a)' },
    { id: 'mecanico', label: 'Mecânico(a)' },
    { id: 'eletronico', label: 'Eletrônico(a)' },
    { id: 'padeiro', label: 'Padeiro(a)' },
    { id: 'cozinheiro', label: 'Cozinheiro(a)' },
    { id: 'garcom', label: 'Garçom/Garçonete' },
    { id: 'motorista', label: 'Motorista' },
    { id: 'seguranca', label: 'Segurança' },
    { id: 'porteiro', label: 'Porteiro(a)' },
    { id: 'faxineiro', label: 'Faxineiro(a)' },
    { id: 'vendedor', label: 'Vendedor(a)' },
    { id: 'vidraceiro', label: 'Vidraceiro(a)' },
    { id: 'tapeceiro', label: 'Tapeceiro(a)' },
    { id: 'montador', label: 'Montador(a) de Móveis' },
    { id: 'reparador', label: 'Reparador(a) de Eletrodomésticos' },
    { id: 'piscineiro', label: 'Piscineiro(a)' },
    { id: 'calheiro', label: 'Calheiro(a)' },
    { id: 'impermeabilizador', label: 'Impermeabilizador(a)' },
    { id: 'dedetizador', label: 'Dedetizador(a)' },
    { id: 'limpador', label: 'Limpador(a) de Vidros' },
    { id: 'restaurador', label: 'Restaurador(a) de Móveis' },
    { id: 'refrigerista', label: 'Refrigerista' },
    { id: 'soldador', label: 'Soldador(a)' },
    { id: 'chaveiro', label: 'Chaveiro(a)' },
    { id: 'desentupidor', label: 'Desentupidor(a)' },
    { id: 'piso', label: 'Instalador(a) de Piso' },
    { id: 'telhadista', label: 'Telhadista' },
    { id: 'cortineiro', label: 'Instalador(a) de Cortinas' },
    { id: 'persianista', label: 'Instalador(a) de Persianas' },
    { id: 'arcondicionado', label: 'Instalador(a) de Ar Condicionado' },
    { id: 'aquecedor', label: 'Instalador(a) de Aquecedores' },
    { id: 'elevador', label: 'Técnico(a) de Elevadores' },
    { id: 'portao', label: 'Instalador(a) de Portões Automáticos' },
    { id: 'cercas', label: 'Instalador(a) de Cercas Elétricas' },
    { id: 'alarme', label: 'Instalador(a) de Alarmes' },
    { id: 'cftv', label: 'Instalador(a) de CFTV' },
    { id: 'som', label: 'Instalador(a) de Sistemas de Som' },
    { id: 'iluminacao', label: 'Instalador(a) de Iluminação' },
    { id: 'gesso', label: 'Instalador(a) de Gesso' },
    { id: 'drywall', label: 'Instalador(a) de Drywall' },
    { id: 'teto', label: 'Instalador(a) de Teto Falso' },
    { id: 'pvc', label: 'Instalador(a) de Forro de PVC' },
];

  const router = useRouter();
  const [tipo, setTipo] = useState<'cliente' | 'prestador'>('cliente');
  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
  const [fileName, setFileName] = useState('Nenhuma imagem escolhida');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFileName(file.name);
      setSelectedFile(file);
    } else {
      setFileName('Nenhuma imagem escolhida');
      setSelectedFile(null);
    }
  };

  const handleTipoChange = (novoTipo: 'cliente' | 'prestador') => {
    setTipo(novoTipo);
    reset();
  };

  const onSubmit = async (data: FormData) => {
    if (data.senha !== data.confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    // Create a FormData object
    const formData = new FormData();

    // Append text fields
    formData.append('nome', data.nome);
    formData.append('email', data.email);
    formData.append('senha', data.senha);
    formData.append('cpf', data.cpf.replace(/\D/g, ''));
    formData.append('pais', data.pais || '');
    formData.append('estado', data.estado || '');
    formData.append('cidade', data.cidade || '');
    formData.append('dataNascimento', data.dataNascimento || '');
    formData.append('celular', data.celular || '');

    // Append image file if present
    if (selectedFile) {
      formData.append('imagem', selectedFile);
    }

    // Append additional fields for 'prestador'
    if (tipo === 'prestador') {
      formData.append('profissoes', JSON.stringify(selectedProfessions));
      formData.append('linkedin', data.linkedin || '');
      formData.append('descricao', data.descricao || '');
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_API}/${tipo}/signin`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
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
                onClick={() => handleTipoChange('cliente')}
                className={`${
                  tipo === 'cliente' ? 'text-yellow-500' : 'text-black'
                } py-2 px-6 transition duration-300 w-1/2`}
              >
                Cliente
              </button>
              <button
                onClick={() => handleTipoChange('prestador')}
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

          {tipo && (
            <form onSubmit={handleSubmit(onSubmit)}>
              {tipo === 'prestador' ? (
                <>
                  {errors.nome && (
                    <span className="text-sm text-red-500">
                      Nome completo é obrigatório
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="Nome completo"
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('nome', { required: true })}
                  />

                  {errors.dataNascimento && (
                    <span className="text-sm text-red-500">
                      Data de Nascimento é obrigatória
                    </span>
                  )}
                  <Controller
                    name="dataNascimento"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <DatePickerDemo
                        date={field.value}
                        setDate={field.onChange}
                      />
                    )}
                  />

                  {errors.celular && (
                    <span className="text-sm text-red-500">
                      Celular é obrigatório
                    </span>
                  )}
                  <input
                    type="tel"
                    placeholder="Celular"
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
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
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
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
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
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
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
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
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('cidade', { required: true })}
                  />

                  {errors.profissoes && (
                    <span className="text-sm text-red-500">
                      Profissões são obrigatórias
                    </span>
                  )}
                  <Controller
                    name="profissoes"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <MultiSelect
                        options={professions}
                        value={field.value || []}
                        onChange={(selectedValues) => {
                          field.onChange(selectedValues); // Atualiza o React Hook Form
                          setSelectedProfessions(selectedValues); // Atualiza o estado local
                        }}
                        placeholder="Selecione as profissões"
                      />
                    )}
                  />

                  <input
                    type="text"
                    placeholder="Perfil no LinkedIn"
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
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
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
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
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
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
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('confirmarSenha', { required: true })}
                  />

                  <textarea
                    placeholder="Descrição"
                    className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm min-h-[100px]"
                    {...register('descricao')}
                  />

                  <div className="mb-4">
                    <label className="bg-gray-200 px-3 py-1 rounded cursor-pointer text-sm">
                      Escolher imagem
                      <input
                        type="file"
                        className="hidden"
                        {...register('imagem')}
                        onChange={handleFileChange}
                      />
                    </label>
                    <span className="ml-2 text-gray-600 text-sm">
                      {fileName}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  {errors.nome && (
                    <span className="text-sm text-red-500">
                      Nome completo é obrigatório
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="Nome completo"
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('nome', { required: true })}
                  />

                  {errors.dataNascimento && (
                    <span className="text-sm text-red-500">
                      Data de Nascimento é obrigatória
                    </span>
                  )}
                  <Controller
                    name="dataNascimento"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <DatePickerDemo
                        date={field.value}
                        setDate={field.onChange}
                      />
                    )}
                  />

                  {errors.celular && (
                    <span className="text-sm text-red-500">
                      Celular é obrigatório
                    </span>
                  )}
                  <input
                    type="tel"
                    placeholder="Celular"
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
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
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
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
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
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
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
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
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
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
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
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
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
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
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('confirmarSenha', { required: true })}
                  />

                  <div className="mb-4">
                    <label className="bg-gray-200 px-3 py-1 rounded cursor-pointer text-sm">
                      Escolher imagem
                      <input
                        type="file"
                        className="hidden"
                        {...register('imagem')}
                        onChange={handleFileChange}
                      />
                    </label>
                    <span className="ml-2 text-gray-600 text-sm">
                      {fileName}
                    </span>
                  </div>
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
                className="text-yellow-500 text-sm hover:text-yellow-600 ml-2 transition-colors"
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
