'use client';
import { useEffect, useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
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
    cidade: string;
  };
  prestador: {
    id: number;
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
  const [modalService, setModalService] = useState<Service | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [serviceToDelete, setServiceToDelete] = useState<Service | null>(null);
  const [serviceToConfirm, setServiceToConfirm] = useState<Service | null>(
    null,
  );
  const [descricao, setDescricao] = useState<string>('');

  const fetchServices = async () => {
    if (!cliente || !cliente.id || !cliente.token) {
      console.error('Cliente information is missing');
      return;
    }

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
      setServices(result.reverse());
    } catch (error) {
      console.error('Erro ao buscar serviços:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [cliente]);

  const updateReserva = async (
    reservaId: number,
    updateData: Partial<{
      clienteId: number;
      prestadorId: number;
      data: string;
      status: string;
    }>,
    token: string,
  ) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/reserva/${reservaId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updateData),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro ao atualizar reserva:', errorData);
        return;
      }

      const updatedReserva = await response.json();
      // Atualize o estado ou execute outras ações conforme necessário
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  const abrirModalConfirmar = (service: Service) => {
    setServiceToConfirm(service);
  };

  const confirmarServico = async () => {
    if (!serviceToConfirm || !cliente || !cliente.token) {
      console.error('Cliente information is missing');
      return;
    }

    try {
      await updateReserva(
        serviceToConfirm.id,
        { status: 'CONFIRMADO' },
        cliente.token,
      );
      setServices((prev) =>
        prev.map((service) =>
          service.id === serviceToConfirm.id
            ? { ...service, status: 'CONFIRMADO' }
            : service,
        ),
      );
      setServiceToConfirm(null);
    } catch (error) {
      console.error('Erro ao confirmar serviço:', error);
    }
  };

  const abrirModalExcluir = (service: Service) => {
    setServiceToDelete(service);
  };

  const confirmarExclusao = async () => {
    if (!serviceToDelete) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/reserva/${serviceToDelete.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cliente.token}`,
          },
          body: JSON.stringify({ status: 'CANCELADO' }),
        },
      );
      if (!response.ok) {
        throw new Error('Failed to delete reservation');
      }
      // Recarregar a lista de serviços após a exclusão
      fetchServices();
      setServiceToDelete(null);
    } catch (error) {
      console.error(error);
    }
  };

  const abrirModalAvaliacao = (service: Service) => {
    setModalService(service);
    setRating(0);
  };

  const criarAvaliacao = async (
    prestadorId: number,
    nota: number,
    comentario: string,
  ) => {
    if (!cliente || !cliente.id || !cliente.token) {
      console.error('Cliente information is missing');
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/avaliacao/prestador/${prestadorId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cliente.token}`,
          },
          body: JSON.stringify({
            clienteId: cliente.id,
            prestadorId,
            nota,
            comentario,
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Erro ao criar avaliação');
      }

      const result = await response.json();
    } catch (error) {
      console.error('Erro ao criar avaliação:', error);
    }
  };

  const enviarAvaliacao = async () => {
    if (!modalService || !cliente || !cliente.token) {
      console.error('Cliente information is missing');
      return;
    }

    try {
      await updateReserva(
        modalService.id,
        { status: 'FINALIZADO' },
        cliente.token,
      );

      setServices((prev) =>
        prev.map((service) =>
          service.id === modalService.id
            ? { ...service, status: 'FINALIZADO' }
            : service,
        ),
      );

      await criarAvaliacao(modalService.prestador.id, rating, descricao);

      setModalService(null);
      setRating(0);
      setDescricao('');
    } catch (error) {
      console.error('Erro ao confirmar serviço:', error);
    }
  };

  return (
    <div className="main-container flex flex-col min-h-screen">
      <div className="container mx-auto px-2 py-10 flex-grow">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="p-2 border"></th>
              <th className="px-6 py-4 border">
                {cliente.tipo === 'prestador' ? 'Cliente' : 'Profissional'}
              </th>
              {cliente.tipo === 'prestador' && (
                <th className="px-6 py-4 border">Cidade</th>
              )}
              <th className="px-6 py-4 border">WhatsApp</th>
              <th className="px-6 py-4 border">Data</th>
              <th className="px-6 py-4 border">Status</th>
              <th className="px-6 py-4 border">Ações</th>
            </tr>
          </thead>
          <tbody className="max-h-[700px] overflow-y-auto block slim-scrollbar">
            {services.length > 0 ? (
              cliente.tipo === 'prestador' ? (
                services.map((item) => (
                  <tr
                    key={item.id}
                    className={`border-b dark:border-gray-700 text-center ${
                      item.status === 'CANCELADO'
                        ? 'bg-red-100'
                        : item.status === 'CONFIRMADO'
                          ? 'bg-green-100'
                          : ''
                    }`}
                  >
                    <td className="justify-items-center p-2 border">
                      <Image
                        src={item.cliente.imagem}
                        alt={item.cliente.nome}
                        width={80}
                        height={80}
                        className="object-cover rounded-full max-h-[80px] max-w-[80px] min-h-[80px] min-w-[80px]"
                      />
                    </td>
                    <td className="px-6 py-4 border">{item.cliente.nome}</td>
                    <td className="px-6 py-4 border">{item.cliente.cidade}</td>
                    <td className="px-6 py-4 border">{item.cliente.celular}</td>
                    <td className="px-6 py-4 border">
                      {new Date(item.data).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 border lowercase">
                      {item.status}
                    </td>
                    <td className="px-6 py-4 border">
                      {item.status === 'PENDENTE' && (
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => abrirModalConfirmar(item)}
                            className="text-green-500 text-4xl"
                          >
                            <FaCheckCircle />
                          </button>
                          <button
                            onClick={() => abrirModalExcluir(item)}
                            className="text-red-500 text-5xl"
                          >
                            <TiDeleteOutline />
                          </button>
                        </div>
                      )}
                      {item.status === 'CONFIRMADO' && (
                        <div className="text-green-500 text-4xl justify-self-center">
                          <FaCheckCircle />
                        </div>
                      )}
                      {item.status === 'CANCELADO' && (
                        <div className="text-red-500 text-5xl justify-self-center">
                          <TiDeleteOutline />
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                services.map((item) => (
                  <tr
                    key={item.id}
                    className={`border-b dark:border-gray-700 text-center ${
                      item.status === 'CANCELADO'
                        ? 'bg-red-100'
                        : item.status === 'CONFIRMADO'
                          ? 'bg-green-100'
                          : ''
                    }`}
                  >
                    <td className=" justify-items-center p-2 border">
                      <Image
                        src={item.prestador.imagem}
                        alt={item.prestador.nome}
                        width={80}
                        height={80}
                        className="object-cover rounded-full max-h-[80px] max-w-[80px] min-h-[80px] min-w-[80px]"
                      />
                    </td>
                    <td className="px-6 py-4 border">{item.prestador.nome}</td>
                    <td className="px-6 py-4 border">
                      {item.prestador.celular}
                    </td>
                    <td className="px-6 py-4 border">
                      {new Date(item.data).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 border lowercase">
                      {item.status}
                    </td>
                    <td className="px-6 py-4 border">
                      {item.status === 'CONFIRMADO' && (
                        <button
                          onClick={() => abrirModalAvaliacao(item)}
                          className="bg-yellow-500 text-white p-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                        >
                          Avaliar Serviço
                        </button>
                      )}
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

      {modalService && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white py-6 px-10 rounded-lg shadow-lg justify-items-center">
            <h2 className="text-xl font-bold mb-4">Avaliar Serviço</h2>
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer text-2xl ${
                    rating >= star ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <textarea
              className="w-full p-2 mb-4 border rounded"
              placeholder="Descreva sua avaliação"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setModalService(null)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={enviarAvaliacao}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}

      {serviceToDelete && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirmar Exclusão</h2>
            <p>Tem certeza que deseja excluir o serviço?</p>
            <div className="flex justify-between gap-2 mt-4">
              <button
                onClick={() => setServiceToDelete(null)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarExclusao}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}

      {serviceToConfirm && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirmar Serviço</h2>
            <p>Tem certeza que deseja confirmar o serviço?</p>
            <div className="flex justify-between gap-2 mt-4">
              <button
                onClick={() => setServiceToConfirm(null)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarServico}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceManager;
