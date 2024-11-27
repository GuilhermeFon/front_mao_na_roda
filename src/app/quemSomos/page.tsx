// pages/quem-somos.tsx

import React from "react";
import Image from "next/image";

import CasalImage from "@/assets/casal.png";

const QuemSomos = () => {
	return (
		<div className="min-h-screen bg-white text-AzulEscuro">
			{/* Cabeçalho com fundo azul */}
			<header className="py-8 bg-AzulForte text-white text-center">
				<h1 className="text-4xl font-bold">Quem Somos</h1>
				<div className=" text-white p-4 max-w-4xl mx-auto">
					<p className="text-lg leading-relaxed line-clamp-6">
						Somos uma plataforma comprometida em conectar você com psicólogos e
						psiquiatras altamente qualificados, proporcionando apoio emocional e
						tratamento terapêutico de maneira acessível, prática e segura.
					</p>
				</div>
			</header>

			{/* Conteúdo principal */}
			<main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Seção sobre a empresa */}
				<section>
					<h2 className="text-AzulEscuro font-semibold mb-2 text-sm uppercase">
						Nossa História
					</h2>
					<h3 className="text-3xl font-bold mb-4">
						Conheça a nossa trajetória e missão
					</h3>
					<p className="text-gray-500 mb-6">
						Desde o início, buscamos conectar pessoas e soluções, oferecendo os
						melhores serviços para atender às suas necessidades. Nosso time é
						apaixonado pelo que faz, sempre comprometido com a excelência e a
						qualidade.
					</p>
					<p className="text-gray-500 mb-6">
						Nossa missão é criar um impacto positivo na vida de nossos clientes,
						oferecendo uma experiência única, personalizada e eficiente. Aqui,
						você encontra mais do que serviços: encontra confiança, dedicação e
						inovação.
					</p>
					<p className="text-gray-500">
						Estamos prontos para crescer com você e enfrentar os desafios que o
						futuro reserva. Junte-se a nós nessa jornada!
					</p>
				</section>

				{/* Imagem da equipe */}
				<section className="flex flex-col items-center justify-center">
					<div className="relative">
						<Image
							src={CasalImage}
							alt="Equipe dedicada"
							width={1000}
							height={800}
							className="rounded-lg shadow-lg"
						/>
						<div className="absolute bottom-6 left-6 bg-yellow-400 p-4 rounded-lg shadow-md text-AzulEscuro">
							<h4 className="text-lg font-bold mb-2">
								Uma equipe dedicada ao sucesso!
							</h4>
							<p className="text-sm">
								Trabalhamos para oferecer as melhores soluções, sempre com foco
								na sua satisfação.
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default QuemSomos;
