'use client';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { DatePickerDemo } from '@/components/Datepicker';
import MultiSelect from '@/components/ui/multiSelect';

interface Profession {
  id: string;
  label: string;
}

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
    { id: 'encanador', label: 'Encanador' },
    { id: 'pintor', label: 'Pintor' },
    { id: 'pedreiro', label: 'Pedreiro' },
    { id: 'carpinteiro', label: 'Carpinteiro' },
    { id: 'marceneiro', label: 'Marceneiro' },
    { id: 'serralheiro', label: 'Serralheiro' },
    { id: 'gesseiro', label: 'Gesseiro' },
    { id: 'azulejista', label: 'Azulejista' },
    { id: 'jardineiro', label: 'Jardineiro' },
    { id: 'mecanico', label: 'Mecânico' },
    { id: 'eletronico', label: 'Eletrônico' },
    { id: 'padeiro', label: 'Padeiro' },
    { id: 'cozinheiro', label: 'Cozinheiro' },
    { id: 'garcom', label: 'Garçom' },
    { id: 'motorista', label: 'Motorista' },
    { id: 'seguranca', label: 'Segurança' },
    { id: 'porteiro', label: 'Porteiro' },
    { id: 'faxineiro', label: 'Faxineiro' },
    { id: 'vendedor', label: 'Vendedor' },
    { id: 'vidraceiro', label: 'Vidraceiro' },
    { id: 'tapeceiro', label: 'Tapeceiro' },
    { id: 'montador', label: 'Montador de Móveis' },
    { id: 'reparador', label: 'Reparador de Eletrodomésticos' },
    { id: 'piscineiro', label: 'Piscineiro' },
    { id: 'calheiro', label: 'Calheiro' },
    { id: 'impermeabilizador', label: 'Impermeabilizador' },
    { id: 'dedetizador', label: 'Dedetizador' },
    { id: 'limpador', label: 'Limpador de Vidros' },
    { id: 'restaurador', label: 'Restaurador de Móveis' },
    { id: 'refrigerista', label: 'Refrigerista' },
    { id: 'soldador', label: 'Soldador' },
    { id: 'chaveiro', label: 'Chaveiro' },
    { id: 'desentupidor', label: 'Desentupidor' },
    { id: 'piso', label: 'Instalador de Piso' },
    { id: 'telhadista', label: 'Telhadista' },
    { id: 'cortineiro', label: 'Instalador de Cortinas' },
    { id: 'persianista', label: 'Instalador de Persianas' },
    { id: 'arcondicionado', label: 'Instalador de Ar Condicionado' },
    { id: 'aquecedor', label: 'Instalador de Aquecedores' },
    { id: 'elevador', label: 'Técnico de Elevadores' },
    { id: 'portao', label: 'Instalador de Portões Automáticos' },
    { id: 'cercas', label: 'Instalador de Cercas Elétricas' },
    { id: 'alarme', label: 'Instalador de Alarmes' },
    { id: 'cftv', label: 'Instalador de CFTV' },
    { id: 'som', label: 'Instalador de Sistemas de Som' },
    { id: 'iluminacao', label: 'Instalador de Iluminação' },
    { id: 'gesso', label: 'Instalador de Gesso' },
    { id: 'drywall', label: 'Instalador de Drywall' },
    { id: 'teto', label: 'Instalador de Teto Falso' },
    { id: 'pvc', label: 'Instalador de Forro de PVC' },
  ];

  const router = useRouter();
  const [tipo, setTipo] = useState<'CLIENTE' | 'PRESTADOR'>('CLIENTE');
  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
  const [fileName, setFileName] = useState('Nenhuma imagem escolhida');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('Nenhuma imagem escolhida');
    }
  };

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
      formData.append('pais', data.pais || '');
      formData.append('estado', data.estado || '');
      formData.append('cpf', data.cpf || '');
      formData.append('cidade', data.cidade || '');
      formData.append('dataNascimento', data.dataNascimento || '');
      formData.append('celular', data.celular || '');
      formData.append('descricao', data.descricao || '');
      if (tipo === 'PRESTADOR') {
        formData.append('profissoes', JSON.stringify(selectedProfessions));
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
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('nomeCompleto', { required: true })}
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
                        {...register('imagem', { required: true })}
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
                  {errors.nomeCompleto && (
                    <span className="text-sm text-red-500">
                      Nome completo é obrigatório
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="Nome completo"
                    className="w-full h-8 mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
                    {...register('nomeCompleto', { required: true })}
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
                        {...register('imagem', { required: true })}
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
