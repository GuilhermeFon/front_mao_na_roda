import Link from "next/link";
import { BsEnvelopeCheckFill } from "react-icons/bs";

export default function confirmacao() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      {/* Mensagem de Sucesso */}
      <div className="flex flex-col items-center mt-16 bg-white rounded-lg shadow-lg p-8">
        <div className="bg-blue-100 p-4 rounded-full mb-4">
          <BsEnvelopeCheckFill className="text-blue-600 h-16 w-16" />
        </div>
        <h1 className="text-2xl font-bold text-blue-800 mb-2">
          Seu agendamento foi realizado com sucesso
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Enviamos um e-mail para o seu endereço cadastrado com os detalhes do serviço agendado.
        </p>
        <Link
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          href="https://mail.google.com"
        >
          Ir para e-mail
        </Link>
      </div>
    </div>
  );
}
