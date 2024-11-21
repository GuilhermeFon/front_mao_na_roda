import Link from 'next/link';

export default function login() {
  return (
    <main className="bg-[url('../../public/imagem_profissional.png')] bg-no-repeat bg-right-bottom">
      <div className="background-image"></div>
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-gray-200 text-center text-2xl font-bold mb-6">
            Mão na Roda
          </h2>
          <form>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <div className="flex justify-between items-center mb-4">
              <label className="text-gray-200 flex items-center">
                <input type="checkbox" className="mr-2" /> Lembrar-me por 14 dias
              </label>
              <Link href="/esqueceuSenha" className="text-yellow-600 text-sm hover:text-yellow-500">
                Esqueceu a senha?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-yellow-300 text-dark p-2 rounded hover:bg-yellow-400 transition"
            >
              Entrar
            </button>
          </form>
          <div className="text-center mt-8">
            <p className="text-gray-200">
              Não tem uma conta?{' '}
              <Link href="/cadastro" className="text-yellow-600 text-sm hover:text-yellow-500">
                Cadastre-se aqui
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
