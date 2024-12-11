'use client';
import { useEffect, useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { FaStar } from 'react-icons/fa';
import { useClienteStore } from '@/context/cliente';
import Image from 'next/image';

interface Service {
  id: number;
  status: string;
  data: string;
  cliente: {
    nome: string;
    imagem: string;
    celular: string;
  };
  prestador: {
    nome: string;
    imagem: string;
    descricao: string;
    celular: string;
  };
  servico: {
    descricao: string;
    item: string;
  };
  avaliacao?: number;
}

function ServiceManager() {
  const { cliente } = useClienteStore();
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    if (!cliente || !cliente.id || !cliente.token) {
      console.error('Cliente information is missing');
      return;
    }

    const fetchServices = async () => {
      try {
        const endpoint =
          cliente.tipo === 'prestador'
            ? `${process.env.NEXT_PUBLIC_URL_API}/reserva/prestador/${cliente.id}`
            : `${process.env.NEXT_PUBLIC_URL_API}/reserva/cliente/${cliente.id}`;

        const response = await fetch(endpoint, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cliente.token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setServices(result);
      } catch (error) {
        console.error('Erro ao buscar serviços:', error);
      }
    };

    fetchServices();
  }, [cliente]);

  return (
    <div className="container mx-auto px-2 py-10">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className=" p-2 border"></th>
            <th className="px-6 py-4 border">
              {cliente.tipo === 'prestador' ? 'Cliente' : 'Profissional'}
            </th>
            <th className="px-6 py-4 border">Data</th>
            <th className="px-6 py-4 border">WhatsApp</th>
            <th className="px-6 py-4 border">Status</th>
            <th className="px-6 py-4 border">Ações</th>
          </tr>
        </thead>
        <tbody>
          {services.length > 0 ? (
            cliente.tipo === 'prestador' ? (
              services.map((item) => (
                <tr key={item.id} className="border-b dark:border-gray-700">
                  <td className="justify-items-center p-2 border">
                    <Image
                      src={item.cliente.imagem}
                      alt={item.servico.descricao}
                      width={80}
                      height={80}
                      className="object-cover rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 border">{item.cliente.nome}</td>
                  <td className="px-6 py-4 border">{item.data}</td>
                  <td className="px-6 py-4 border">{item.cliente.celular}</td>
                  <td className="px-6 py-4 border lowercase">
                    {item.status}
                    {/* {item.avaliacao ? (
                      <FaStar className="text-yellow-400" />
                    ) : (
                      <button
                        // onClick={() => avaliarServico(item.id)}
                        className="text-yellow-400"
                      >
                        Avaliar
                      </button>
                    )} */}
                  </td>
                  <td className="px-6 py-4 border">
                    <button
                      // onClick={() => cancelarServico(item.id)}
                      className="text-red-500"
                    >
                      <TiDeleteOutline />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              services.map((item) => (
                <tr
                  key={item.id}
                  className="border-b dark:border-gray-700 text-center"
                >
                  <td className=" justify-items-center p-2 border">
                    <Image
                      src={item.prestador.imagem}
                      alt={item.prestador.nome}
                      width={80}
                      height={80}
                      className="object-cover rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 border">{item.prestador.nome}</td>
                  <td className="px-6 py-4 border">
                    {new Date(item.data).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 border">{item.cliente.celular}</td>
                  <td className="px-6 py-4 border lowercase">{item.status}</td>
                  <td className="px-6 py-4 border">
                    <button
                      // onClick={() => cancelarServico(item.id)}
                      className="text-red-500"
                    >
                      <TiDeleteOutline />
                    </button>
                  </td>
                </tr>
              ))
            )
          ) : (
            <tr>
              <td colSpan={5} className="px-6 py-4 text-center">
                Nenhum serviço encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceManager;
