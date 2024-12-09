import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

interface FormValues {
  termo: string;
}

interface InputPesquisaProps {
  setCarros: (
    carros: Array<{
      id: number;
      nome: string;
      [key: string]: string | number | boolean;
    }>,
  ) => void;
}

export function InputPesquisa({ setCarros }: InputPesquisaProps) {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const enviaPesquisa: SubmitHandler<FormValues> = async (data) => {
    if (data.termo.length < 2) {
      toast.warning('Digite, no mínimo, 2 caracteres para a pesquisa');
      return;
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/propostas/${data.termo}`,
    );
    const dados = await response.json();

    setCarros(dados);

    if (dados.length === 0) {
      // toast.error("Não há produtos com o termo pesquisado")
      reset({ termo: '' });
      return;
    }
  };

  return (
    <form
      className="max-w-xl container rounded-full"
      onSubmit={handleSubmit(enviaPesquisa)}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full max-h-10 py-4 rounded-full ps-10 text-sm text-gray-900 border border-gray-300 bg-background placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Pesquisar"
          required
          {...register('termo')}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full px-4 bg-transparent border-l border-gray-300 rounded-r-full focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
