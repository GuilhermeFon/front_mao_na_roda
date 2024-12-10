// components/FeatureGrid.js
export default function FeatureGrid() {
  const features = [
    {
      title: 'Encontre serviços próximos',
      description:
        'Localize rapidamente profissionais qualificados na sua região, prontos para atender às suas necessidades.',
      icon: '📍', // Localização
    },
    {
      title: 'Profissionais confiáveis',
      description:
        'Todos os prestadores de serviços passam por uma avaliação rigorosa para garantir qualidade e segurança.',
      icon: '✅', // Verificação
    },
    {
      title: 'Agendamento facilitado',
      description:
        'Escolha o serviço, veja os horários disponíveis e agende com facilidade diretamente pela plataforma.',
      icon: '🗓', // Agenda
    },
    {
      title: 'Pagamento seguro',
      description:
        'Realize pagamentos diretamente na plataforma com segurança e comodidade, sem complicações.',
      icon: '💳', // Pagamento
    },
    {
      title: 'Avaliações e feedback',
      description:
        'Confira avaliações de outros clientes e escolha o melhor profissional para você. Sua opinião também é importante!',
      icon: '⭐', // Estrela
    },
    {
      title: 'Diversidade de serviços',
      description:
        'Encanadores, eletricistas, pintores e muito mais. Tudo o que você precisa em um só lugar.',
      icon: '🛠', // Ferramentas
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg shadow-md ${
            index % 2 === 0 ? 'bg-[#082D53] text-white' : 'bg-gray-100'
          }`}
        >
          <div className="text-3xl mb-4">{feature.icon}</div>
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p className="mt-2 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
