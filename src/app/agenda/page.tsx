"use client";
import { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { useClienteStore } from "@/context/cliente";
import Image from "next/image";

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
  const [modalService, setModalService] = useState<Service | null>(null);
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    if (!cliente || !cliente.id || !cliente.token) {
      console.error("Cliente information is missing");
      return;
    }

    const fetchServices = async () => {
      try {
        const endpoint =
          cliente.tipo === "prestador"
            ? `${process.env.NEXT_PUBLIC_URL_API}/reserva/prestador/${cliente.id}`
            : `${process.env.NEXT_PUBLIC_URL_API}/reserva/cliente/${cliente.id}`;

        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cliente.token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setServices(result);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    };

    fetchServices();
  }, [cliente]);

  const confirmarServico = (id: number) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id ? { ...service, status: "confirmado" } : service
      )
    );
  };

  const excluirServico = (id: number) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
  };

  const abrirModalAvaliacao = (service: Service) => {
    setModalService(service);
    setRating(0);
  };

  const enviarAvaliacao = () => {
    if (modalService) {
      setServices((prev) =>
        prev.map((service) =>
          service.id === modalService.id
            ? { ...service, avaliacao: rating }
            : service
        )
      );
      setModalService(null);
      setRating(0);
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
                {cliente.tipo === "prestador" ? "Cliente" : "Profissional"}
              </th>
              <th className="px-6 py-4 border">Data</th>
              <th className="px-6 py-4 border">WhatsApp</th>
              <th className="px-6 py-4 border">Status</th>
              <th className="px-6 py-4 border">Ações</th>
            </tr>
          </thead>
          <tbody>
            {services.length > 0 ? (
              cliente.tipo === "prestador" ? (
                services.map((item) => (
                  <tr key={item.id} className="border-b dark:border-gray-700 text-center">
                    <td className="justify-items-center p-2 border">
                      <Image
                        src={item.cliente.imagem}
                        alt={item.cliente.nome}
                        width={80}
                        height={80} 
                        className="object-cover rounded-full"
                      />
                    </td>
                    <td className="px-6 py-4 border">{item.cliente.nome}</td>
                    <td className="px-6 py-4 border">
                      {new Date(item.data).toLocaleDateString("pt-BR")}
                    </td>
                    <td className="px-6 py-4 border">{item.cliente.celular}</td>
                    <td className="px-6 py-4 border lowercase">{item.status}</td>
                    <td className="px-6 py-4 border flex gap-2">
                      <button
                        onClick={() => confirmarServico(item.id)}
                        className="text-green-500 text-4xl"
                      >
                        <FaCheckCircle />
                      </button>
                      <button
                        onClick={() => excluirServico(item.id)}
                        className="text-red-500 text-5xl"
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
                      {new Date(item.data).toLocaleDateString("pt-BR")}
                    </td>
                    <td className="px-6 py-4 border">{item.prestador.celular}</td>
                    <td className="px-6 py-4 border lowercase">
                      {item.status}
                    </td>
                    <td className="px-6 py-4 border">
                      {item.status === "confirmado" && (
                        <button
                          onClick={() => abrirModalAvaliacao(item)}
                          className="text-yellow-400"
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
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Avaliar Serviço</h2>
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer text-2xl ${
                    rating >= star ? "text-yellow-400" : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
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
    </div>
  );
}

export default ServiceManager;
