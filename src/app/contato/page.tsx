// pages/contato.tsx

import Image from "next/image";
import React from "react";

import EncanadorComTuboImage from "@/assets/encanador_com_tubo.png";
import Faq from "@/components/Faq";

const Contato = () => {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Cabeçalho com fundo azul */}
			<header className="bg-[#082D53] text-white py-8">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold">Contato</h1>
				</div>
			</header>

			{/* Conteúdo principal */}
			<main className="flex-grow bg-background">
				<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Formulário de Contato */}
					<section>
						<h2 className="text-AzulEscuro font-semibold mb-2 text-sm uppercase">
							Entre em contato
						</h2>
						<h3 className="text-3xl font-bold mb-4">
							Fale conosco!
						</h3>
						<p className="text-gray-500 mb-6">
						Estamos aqui para ouvir você. Sua opinião, dúvidas e sugestões são muito importantes para nós.
						Preencha o formulário ao lado e envie sua mensagem. Nossa equipe fará o possível para responder o mais rápido possível.
						No Mão na Roda, conectamos você a profissionais qualificados, porque acreditamos que todo serviço merece ser feito com excelência.
						</p>
						<form className="bg-background rounded-lg p-6 border border-gray-300 shadow-lg space-y-4">
							<input
								type="text"
								placeholder="Nome"
								className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-AzulForte"
							/>
							<input
								type="email"
								placeholder="E-mail"
								className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-AzulForte"
							/>
							<input
								type="tel"
								placeholder="Número de telefone"
								className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-AzulForte"
							/>
							<textarea
								placeholder="Mensagem"
								className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-AzulForte"
								rows={4}
							/>
							<button
								type="submit"
								className="bg-AzulForte text-white w-full py-3 rounded-lg hover:bg-AzulEscuro transition-colors"
							>
								Enviar Mensagem
							</button>
						</form>
					</section>

					{/* Imagem e Chamada */}
					<section className="flex flex-col items-center justify-center">
						<div className="relative">
							<Image
								src={EncanadorComTuboImage}
								alt="Imagem Contato"
								width={900}
								height={800}
								className="rounded-lg shadow-lg"
							/>
							<div className="absolute bottom-6 left-6 bg-yellow-500 p-4 rounded-lg shadow-md text-AzulEscuro">
								<h4 className="text-lg font-bold mb-2 mr-2">
									Sinta-se à vontade para entrar em contato conosco e nos
									contatar!
								</h4>
								<p className="text-sm">
									Deixe-o fugir menos da dor, menos severo do prazer.
								</p>
							</div>
						</div>
					</section>
				</div>
        <Faq />
			</main>
		</div>
	);
};

export default Contato;
