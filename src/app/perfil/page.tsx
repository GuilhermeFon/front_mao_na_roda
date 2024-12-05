'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useClienteStore } from '@/context/cliente';

import PerfilImage from '@/assets/perfil.jpg';
import StarImage from '@/assets/icones/full_star.svg';
import HalfStarImage from '@/assets/icones/half_star.svg';

export default function Perfil() {
  const { cliente } = useClienteStore();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    descricao: '',
    perfilImage: null as string | ArrayBuffer | null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFormData({
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone,
      dataNascimento: cliente.dataNascimento,
      descricao: cliente.descricao,
      perfilImage: PerfilImage.src,
    });
  }, [cliente]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (upload) => {
        if (upload.target && upload.target.result !== null) {
          const result = upload.target.result;
          if (result) {
            setFormData((prevState) => ({
              ...prevState,
              perfilImage: result as string | ArrayBuffer,
            }));
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
    setFormData((prevState) => ({
      ...prevState,
      perfilImage: null,
    }));
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveClick = () => {
    setIsConfirmModalOpen(true);
  };

  const handleConfirmSave = () => {
    // Lógica para salvar os dados
    setIsConfirmModalOpen(false);
  };

  const handleCancelSave = () => {
    setIsConfirmModalOpen(false);
  };

  return (
    <section className="container w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 px-2 py-10">
      <div className="col-span-2 md:col-span-1 space-y-4">
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
            className="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Seu nome completo"
            value={formData.nome}
            onChange={handleChange}
            required
          />
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
            className="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="seu_email@exemplo.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="telefone"
            className="block text-sm font-medium text-black"
          >
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            className="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="(00) 00000-0000"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="dataNascimento"
            className="block text-sm font-medium text-black"
          >
            Data de Nascimento
          </label>
          <input
            type="date"
            id="dataNascimento"
            className="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
          />
        </div>
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
            className="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Diga algo sobre você aos seus clientes..."
            value={formData.descricao}
            onChange={handleChange}
          />
        </div>
        <input
          type="file"
          id="perfilImage"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
      </div>
      <div className="col-span-2 md:col-span-1 order-first md:order-3">
        <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4 col-span-2 md:col-span-1 h-fit">
          <img
            src={
              typeof formData.perfilImage === 'string'
                ? formData.perfilImage
                : PerfilImage.src
            }
            alt="Foto do Perfil"
            width={100}
            height={100}
            className="rounded-full border-4 border-blue-500 cursor-pointer hover:opacity-70 transition-opacity aspect-square"
            onClick={handleImageClick}
          />
          <div className='space-y-1'>
            <h2 className="text-xl font-bold text-gray-800">{cliente.nome}</h2>
            <div className="flex items-center space-x-2">
              <Image src={StarImage} alt="" width={20} height={20} />
              <Image src={StarImage} alt="" width={20} height={20} />
              <Image src={StarImage} alt="" width={20} height={20} />
              <Image src={StarImage} alt="" width={20} height={20} />
              <Image src={HalfStarImage} alt="" width={20} height={20} />
            </div>
            <p className="text-gray-600 text-sm">Plano: Ouro</p>
          </div>
        </div>
      </div>
      <div className="col-span-2 order-last flex flex-col justify-between items-end">
        <button
          type="button"
          className="text-white font-semibold mt-5 bg-yellow-500 hover:bg-yellow-600 rounded-lg px-5 py-2 text-center w-fit"
          onClick={handleSaveClick}
        >
          Salvar
        </button>
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
                onClick={handleConfirmSave}
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
