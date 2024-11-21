import Link from 'next/link';

export default function cadastro() {
  return (
    
  <main className="bg-[url('../../public/imagem_profissional.png')]  bg-no-repeat bg-right-bottom   ">
    
  
    <div className="flex justify-center items-center min-h-screen p-4">
     
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
      
        <h2 className="text-gray-200 text-center text-2xl font-bold mb-6">
          Cadastro
        </h2>
        <form>
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="password"
            placeholder="Confirmar senha"
            className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="text"
            placeholder="Primeiro nome"
            className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="text"
            placeholder="Sobrenome"
            className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="tel"
            placeholder="Celular (53) 98112-3456"
            className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <button
            type="submit"
            className="w-full mt-6 bg-yellow-300 text-dark p-2 rounded hover:bg-yellow-400 transition"
          >
            Registrar
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-200">
            Já tem uma conta?
            <Link href="/login" className="text-yellow-600 text-sm hover:text-yellow-500">
                Login
              </Link>
          </p>
        </div>
      </div>
    </div>
    
  </main>

  )}
