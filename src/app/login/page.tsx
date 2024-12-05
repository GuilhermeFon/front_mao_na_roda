'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useClienteStore } from '@/context/cliente';
import Link from 'next/link';

interface LoginFormInputs {
  email: string;
  senha: string;
  manter?: boolean;
}

export default function Login() {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const { logaCliente } = useClienteStore();
  const router = useRouter();

  async function verificaLogin(data: { email: string; senha: string }) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/usuarios/login`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ email: data.email, senha: data.senha }),
      },
    );
    const dados = await response.json();
    if (response.status === 200) {
      const response_ = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/usuarios/dados`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${dados.token}`,
          },
          method: 'POST',
          body: JSON.stringify({ email: data.email }),
        },
      );
      const dadosUsuario = await response_.json();
      const dadosUsuario2 = {
        ...dadosUsuario,
        token: dados.token,
      };
      logaCliente(dadosUsuario2);
      localStorage.setItem('client_key', dadosUsuario.id);
      localStorage.setItem('client_token', dados.token);

      router.push('/');
    } else {
      alert('Erro... Login ou Senha incorretos');
    }
  }
  return (
    <main className={'background-profissional bg-no-repeat bg-right-bottom'}>
      <div className="background-image" />

      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-gray-200 text-center text-2xl font-bold mb-6">
            Mão na Roda
          </h2>
          <form onSubmit={handleSubmit(verificaLogin)}>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register('email')}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register('senha')}
              required
            />
            <div className="flex justify-between items-center mb-4">
              <Link
                href="esqueceuSenha"
                className="text-yellow-500 text-sm hover:text-yellow-600"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-yellow-500 text-dark p-2 rounded hover:bg-yellow-600 transition"
            >
              Entrar
            </button>
          </form>
          <div className="text-center mt-8">
            <p className="text-gray-200">
              Não tem uma conta?
              <Link
                href="cadastro"
                className="text-yellow-500 text-sm hover:text-yellow-600 ml-2"
              >
                Cadastre-se aqui
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
