import Link from "next/link";

export default function esqueceuSenha() {
  return (
    <main
      className={"background-profissional bg-no-repeat bg-right-bottom min-h-screen flex justify-center items-center"}
    >
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-gray-200 text-center text-2xl font-bold mb-6">
          Esqueceu a senha?
        </h2>
        <p className="text-gray-400 text-center mb-4">
          Insira seu e-mail para receber instruções de redefinição de senha.
        </p>
        <form>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <button
            type="submit"
            className="w-full mt-6 bg-yellow-300 text-dark p-2 rounded hover:bg-yellow-400 transition"
          >
            Enviar
          </button>
        </form>
        <div className="text-center mt-8">
          <p className="text-gray-200">
            Lembrou a senha?{" "}
            <Link
              href="login"
              className="text-yellow-600 text-sm hover:text-yellow-500"
            >
              Voltar ao login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
