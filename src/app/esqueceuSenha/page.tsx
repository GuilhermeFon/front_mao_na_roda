import Link from "next/link";

export default function esqueceuSenha() {
  return (
    <main className="bg-no-repeat bg-right-bottom min-h-screen flex justify-center items-start p-4">
      <div className="p-8 rounded-lg w-full max-w-md">
        <h2 className="text-black text-center text-2xl mb-6">Esqueceu a senha?</h2>
        <p className="text-black text-center mb-4">
          Insira seu e-mail para receber instruções de redefinição de senha.
        </p>
        <form>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full mb-4 px-3 py-1 rounded border border-gray-300 bg-transparent text-black placeholder-gray-400 placeholder:text-sm"
            required
          />
          <button
            type="submit"
            className="w-full mt-6 bg-yellow-500 text-dark p-2 rounded hover:bg-yellow-600 transition"
          >
            Enviar
          </button>
        </form>
        <div className="text-center mt-8">
          <p className="text-black">
            Lembrou a senha?{" "}
            <Link
              href="login"
              className="text-yellow-500 text-sm hover:text-yellow-600 transition-colors"
            >
              Voltar ao login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
