'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useClienteStore } from '@/context/cliente';
import { useForm, Controller } from 'react-hook-form';
import { DatePickerDemo } from '@/components/Datepicker';
import MultiSelect from '@/components/ui/multiSelect';

import PerfilImage from '@/assets/perfil.jpg';
import StarImage from '@/assets/icones/full_star.svg';
import HalfStarImage from '@/assets/icones/half_star.svg';

interface Profession {
  id: string;
  label: string;
}

type FormData = {
  nome: string;
  email: string;
  celular: string;
  dataNascimento: string;
  descricao: string;
  perfilImage: string | ArrayBuffer | null;
  senha: string;
  confirmarSenha: string;
  cpf: string;
  pais: string;
  estado: string;
  cidade: string;
  imagem: FileList;
  profissoes?: string[];
  linkedin?: string;
};

export default function Perfil() {
  const { cliente } = useClienteStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
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

  useEffect(() => {
    const storedClienteId = localStorage.getItem('clienteId');
    if (storedClienteId) {
      fetchClienteData(storedClienteId);
    } else if (cliente.id) {
      localStorage.setItem('clienteId', cliente.id);
      fetchClienteData(cliente.id);
    }
  }, [cliente.id]);

  const fetchClienteData = async (clienteId: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/prestador/${clienteId}`,
      );
      const result = await response.json();
      setValue('nome', result.nome);
      setValue('email', result.email);
      setValue('celular', result.celular);
      setValue('cpf', result.cpf);
      setValue('pais', result.pais);
      setValue('estado', result.estado);
      setValue('cidade', result.cidade);
      setValue('dataNascimento', result.dataNascimento);
      setValue('linkedin', result.linkedin);
      setValue('profissoes', result.profissoes);
      setValue('descricao', result.descricao);
      setValue('perfilImage', result.perfilImage || PerfilImage.src);
      // Set other fields if available
    } catch (error) {
      console.error('Erro ao buscar dados do cliente:', error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (upload) => {
        if (upload.target && upload.target.result !== null) {
          const result = upload.target.result;
          if (result) {
            setValue('perfilImage', result as string | ArrayBuffer);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleRemoveImage = () => {
    setValue('perfilImage', null);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // const handleSaveClick = () => {
  //   setIsConfirmModalOpen(true);
  // };
  console.log('cliente: ', cliente);

  const handleConfirmSave = async (data: FormData) => {
    setIsConfirmModalOpen(false);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/prestador/${cliente.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cliente.token}`,
          },
          body: JSON.stringify(data),
        },
      );
      if (response.ok) {
        alert('Dados atualizados com sucesso!');
      } else {
        alert('Erro ao atualizar dados.');
      }
    } catch (error) {
      console.error('Erro ao atualizar dados:', error);
    }
  };

  const handleCancelSave = () => {
    setIsConfirmModalOpen(false);
  };

  return (
    <section className="container w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 px-2 py-10">
      <div className="col-span-2 md:col-span-1 space-y-4">
        <form onSubmit={handleSubmit(handleConfirmSave)}>
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-black"
            >
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              className="bg-white border border-gray-300 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Seu nome completo"
              {...register('nome', { required: true })}
            />
            {errors.nome && (
              <span className="text-sm text-red-500">
                Nome completo é obrigatório
              </span>
            )}
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-white border border-gray-300 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="seu_email@exemplo.com"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">Email é obrigatório</span>
            )}
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="celular"
              className="block text-sm font-medium text-black"
            >
              celular
            </label>
            <input
              type="tel"
              id="celular"
              className="bg-white border border-gray-300 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="(00) 00000-0000"
              {...register('celular', { required: true })}
            />
            {errors.celular && (
              <span className="text-sm text-red-500">
                celular é obrigatório
              </span>
            )}
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="dataNascimento"
              className="block text-sm font-medium text-black"
            >
              Data de Nascimento
            </label>
            <Controller
              name="dataNascimento"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <DatePickerDemo date={field.value} setDate={field.onChange} />
              )}
            />
            {errors.dataNascimento && (
              <span className="text-sm text-red-500">
                Data de Nascimento é obrigatória
              </span>
            )}
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="cpf"
              className="block text-sm font-medium text-black"
            >
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              className="bg-white border border-gray-300 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="CPF"
              {...register('cpf', { required: true })}
            />
            {errors.cpf && (
              <span className="text-sm text-red-500">CPF é obrigatório</span>
            )}
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="pais"
              className="block text-sm font-medium text-black"
            >
              País
            </label>
            <input
              type="text"
              id="pais"
              className="bg-white border border-gray-300 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="País"
              {...register('pais', { required: true })}
            />
            {errors.pais && (
              <span className="text-sm text-red-500">País é obrigatório</span>
            )}
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="estado"
              className="block text-sm font-medium text-black"
            >
              Estado
            </label>
            <input
              type="text"
              id="estado"
              className="bg-white border border-gray-300 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Estado"
              {...register('estado', { required: true })}
            />
            {errors.estado && (
              <span className="text-sm text-red-500">Estado é obrigatório</span>
            )}
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="cidade"
              className="block text-sm font-medium text-black"
            >
              Cidade
            </label>
            <input
              type="text"
              id="cidade"
              className="bg-white border border-gray-300 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Cidade"
              {...register('cidade', { required: true })}
            />
            {errors.cidade && (
              <span className="text-sm text-red-500">Cidade é obrigatória</span>
            )}
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="profissoes"
              className="block text-sm font-medium text-black"
            >
              Profissões
            </label>
            <Controller
              name="profissoes"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <MultiSelect
                  options={professions}
                  value={field.value || []}
                  onChange={(selectedValues) => {
                    field.onChange(selectedValues);
                  }}
                  placeholder="Selecione as profissões"
                />
              )}
            />
            {errors.profissoes && (
              <span className="text-sm text-red-500">
                Profissões são obrigatórias
              </span>
            )}
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="linkedin"
              className="block text-sm font-medium text-black"
            >
              Perfil no LinkedIn
            </label>
            <input
              type="text"
              id="linkedin"
              className="bg-white border border-gray-300 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Perfil no LinkedIn"
              {...register('linkedin')}
            />
          </div>

          {/* <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="senha"
              className="block text-sm font-medium text-black"
            >
              Senha
            </label>
            <input
              type="password"
              id="senha"
              className="bg-white border border-gray-300 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Senha"
              {...register('senha', { required: true })}
            />
            {errors.senha && (
              <span className="text-sm text-red-500">Senha é obrigatória</span>
            )}
          </div> */}

          {/* <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="confirmarSenha"
              className="block text-sm font-medium text-black"
            >
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              className="bg-white border border-gray-300 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Confirmar Senha"
              {...register('confirmarSenha', { required: true })}
            />
            {errors.confirmarSenha && (
              <span className="text-sm text-red-500">
                Confirmar senha é obrigatória
              </span>
            )}
          </div> */}

          <div>
            <label
              htmlFor="descricao"
              className="block text-sm font-medium text-black"
            >
              Descrição
            </label>
            <textarea
              id="descricao"
              rows={10}
              className="bg-white border border-gray-300 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Diga algo sobre você aos seus clientes..."
              {...register('descricao')}
            />
          </div>

          <input
            type="file"
            id="perfilImage"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <div className="col-span-2 order-last flex flex-col justify-between items-end">
            <button
              type="submit"
              className="text-white font-semibold mt-5 bg-yellow-500 hover:bg-yellow-600 rounded-lg px-5 py-2 text-center w-fit"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>

      <div className="col-span-2 md:col-span-1 order-first md:order-3">
        <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4 col-span-2 md:col-span-1 h-fit">
          <img
            src={
              typeof cliente.perfilImage === 'string'
                ? cliente.perfilImage
                : PerfilImage.src
            }
            alt="Foto do Perfil"
            width={100}
            height={100}
            className="rounded-full border-4 border-blue-500 cursor-pointer hover:opacity-70 transition-opacity aspect-square"
            onClick={handleImageClick}
          />
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-gray-800">{cliente.nome}</h2>
            <div className="flex items-center space-x-2">
              <Image src={StarImage} alt="" width={20} height={20} />
              <Image src={StarImage} alt="" width={20} height={20} />
              <Image src={StarImage} alt="" width={20} height={20} />
              <Image src={StarImage} alt="" width={20} height={20} />
              <Image src={HalfStarImage} alt="" width={20} height={20} />
            </div>
            <p className="text-gray-600 text-sm">
              Plano: {cliente.plano ? cliente.plano : 'Gratuito'}
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white flex flex-col gap-5 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Alterar Imagem de Perfil</h2>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
              onClick={handleRemoveImage}
            >
              Remover Imagem
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={() => {
                fileInputRef.current?.click();
                setIsModalOpen(false);
              }}
            >
              Fazer Upload de Nova Imagem
            </button>
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded-lg"
              onClick={handleCloseModal}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {isConfirmModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg ">
            <h2 className="text-xl font-bold mb-4">
              Tem certeza que deseja salvar?
            </h2>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                onClick={handleCancelSave}
              >
                Cancelar
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
                onClick={handleSubmit(handleConfirmSave)}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
