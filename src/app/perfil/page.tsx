'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

import imagem from '@/assets/perfil.jpg';
import ProfileImage from '@/assets/profile.png';
import { DatePickerDemo } from '@/components/Datepicker';
import MultiSelect from '@/components/ui/multiSelect';
import { useClienteStore } from '@/context/cliente';

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
  senha: string;
  confirmarSenha: string;
  cpf: string;
  pais: string;
  estado: string;
  cidade: string;
  imagem: string | FileList;
  profissoes?: string[];
  linkedin?: string;
};

export default function Perfil() {
  const { cliente } = useClienteStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
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

  const fetchClienteData = useCallback(
    async (clienteId: string) => {
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
        setValue('imagem', result.imagem || imagem.src); // imagem ainda é usada, mas fora das dependências
      } catch (error) {
        console.error('Erro ao buscar dados do cliente:', error);
      }
    },
    [setValue], // Apenas setValue como dependência
  );

  useEffect(() => {
    const storedClienteId = localStorage.getItem('clienteId');
    if (storedClienteId) {
      fetchClienteData(storedClienteId);
    } else if (cliente.id) {
      localStorage.setItem('clienteId', cliente.id);
      fetchClienteData(cliente.id);
    }
  }, [cliente.id, fetchClienteData]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (upload) => {
        if (upload.target && upload.target.result !== null) {
          const result = upload.target.result;
          if (result) {
            setValue('imagem', result as string);
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
    setValue('imagem', '');
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

  const handlePlanUpgrade = (plan: string) => {
    // setCliente({ ...cliente, plano: plan });
    console.log(plan);
    setIsPlanModalOpen(false);
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
              className="bg-background border border-gray-30 mb-4 text-sm rounded-lg block w-full p-2.5"
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
              className="bg-background border border-gray-300 mb-4 text-sm rounded-lg block w-full p-2.5"
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
              className="bg-background border border-gray-300 mb-4 text-sm rounded-lg block w-full p-2.5"
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
              className="bg-background border border-gray-300 mb-4 text-sm rounded-lg block w-full p-2.5"
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
              className="bg-background border border-gray-300 mb-4 text-sm rounded-lg block w-full p-2.5"
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
              className="bg-background border border-gray-300 mb-4 text-sm rounded-lg block w-full p-2.5"
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
              className="bg-background border border-gray-300 mb-4 text-sm rounded-lg block w-full p-2.5"
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
              className="bg-background border border-gray-300 mb-4 text-sm rounded-lg block w-full p-2.5"
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
              className="bg-background border border-gray-300 mb-4 text-sm rounded-lg block w-full p-2.5"
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
              className="bg-background border border-gray-300 mb-4 text-sm rounded-lg block w-full p-2.5"
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
              className="bg-background border border-gray-300 mb-4 text-sm rounded-lg block w-full p-2.5"
              placeholder="Diga algo sobre você aos seus clientes..."
              {...register('descricao')}
            />
          </div>

          <input
            type="file"
            id="imagem"
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
        <div className="bg-background rounded-lg border p-4 flex items-start space-x-4 col-span-2 md:col-span-1 h-fit">
          <Image
            src={cliente.imagem ? cliente.imagem : ProfileImage}
            alt="Foto do Perfil"
            width={150}
            height={150}
            className="rounded-full border border-gray-800 object-cover cursor-pointer hover:opacity-70 transition-opacity aspect-square"
            onClick={handleImageClick}
          />
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-gray-800">{cliente.nome}</h2>
            <div className="flex items-center space-x-2">
              {Number.isFinite(cliente.nota) ? (
                <>
                  {[...Array(Math.floor(cliente.nota))].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 w-5 h-5 mx-1" />
                  ))}
                  {cliente.nota % 1 !== 0 && (
                    <FaStarHalfAlt className="text-yellow-500 w-5 h-5 mx-1" />
                  )}
                  {[...Array(5 - Math.ceil(cliente.nota))].map((_, i) => (
                    <FaRegStar
                      key={i}
                      className="text-yellow-500 w-5 h-5 mx-1"
                    />
                  ))}
                </>
              ) : (
                [...Array(5)].map((_, i) => (
                  <FaRegStar key={i} className="text-yellow-500 w-5 h-5 mx-1" />
                ))
              )}
            </div>
            <p className="text-gray-600 text-sm">
              Plano: {cliente.plano ? cliente.plano : 'Gratuito'}
            </p>
            {cliente.plano !== 'ouro' && (
              <p
                className="text-gray-600 text-sm hover:underline cursor-pointer"
                onClick={() => setIsPlanModalOpen(true)}
              >
                Melhore seu alcance com um upgrade de plano
              </p>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-center flex flex-col gap-5 p-6 rounded-lg shadow-lg">
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

      {isPlanModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsPlanModalOpen(false)}
        >
          <div className="bg-white text-center flex flex-col gap-5 p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Selecione seu Plano</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
              <div className="bg-gray-100 p-6 rounded-lg flex flex-col justify-between max-w-[300px] shadow-md">
                <h3 className="text-xl font-bold mb-2">Gratuito</h3>
                <p className="text-sm mb-4">
                  Plano básico com acesso limitado.
                </p>
                <ul className="text-left text-sm mb-4">
                  <li>- Suporte limitado</li>
                  <li>- Sem prioridade na listagem de serviços</li>
                </ul>
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                  onClick={() => handlePlanUpgrade('gratuito')}
                >
                  Selecionar
                </button>
              </div>
              <div className="bg-[#BF7B6E] p-6 rounded-lg flex flex-col justify-between max-w-[300px] shadow-md">
                <h3 className="text-xl font-bold mb-2">Bronze</h3>
                <p className="text-sm mb-4">
                  Plano intermediário com mais vantagens.
                </p>
                <ul className="text-left text-sm mb-4">
                  <li>- Acesso a funcionalidades intermediárias</li>
                  <li>- Suporte por E-mail 24h</li>
                  <li>- Prioridade baixa na listagem de serviços</li>
                </ul>
                <button
                  className="bg-[#A65A4E] text-white px-4 py-2 rounded-lg hover:bg-[#8E4A3F] transition"
                  onClick={() => handlePlanUpgrade('bronze')}
                >
                  Selecionar
                </button>
              </div>
              <div className="bg-[#AEADAD] p-6 rounded-lg flex flex-col justify-between max-w-[300px] shadow-md">
                <h3 className="text-xl font-bold mb-2">Prata</h3>
                <p className="text-sm mb-4">
                  Plano avançado com ainda mais vantagens.
                </p>
                <ul className="text-left text-sm mb-4">
                  <li>- Acesso a todas as funcionalidades</li>
                  <li>- Suporte por E-mail 24h</li>
                  <li>- Prioridade alta na listagem de serviços</li>
                </ul>
                <button
                  className="bg-[#8C8B8B] text-white px-4 py-2 rounded-lg hover:bg-[#7A7979] transition"
                  onClick={() => handlePlanUpgrade('prata')}
                >
                  Selecionar
                </button>
              </div>
              <div className="bg-[#D3A344] p-6 rounded-lg flex flex-col justify-between max-w-[300px] shadow-md">
                <h3 className="text-xl font-bold mb-2">Ouro</h3>
                <p className="text-sm mb-4">
                  Plano completo com todas as vantagens.
                </p>
                <ul className="text-left text-sm mb-4">
                  <li>- Acesso a todas as funcionalidades</li>
                  <li>- Suporte por E-mail 24h</li>
                  <li>- Prioridade máxima na listagem de serviços</li>
                </ul>
                <button
                  className="bg-[#B8860B] text-white px-4 py-2 rounded-lg hover:bg-[#A0760A] transition"
                  onClick={() => handlePlanUpgrade('ouro')}
                >
                  Selecionar
                </button>
              </div>
            </div>
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded-lg mt-4 hover:bg-gray-400 transition"
              onClick={() => setIsPlanModalOpen(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {isConfirmModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-background p-6 rounded-lg shadow-lg ">
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
