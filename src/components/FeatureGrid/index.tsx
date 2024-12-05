// components/FeatureGrid.js
export default function FeatureGrid() {
    const features = [
      {
        title: "Acesso facilitado",
        description:
          "Encontre o apoio que precisa sem sair de casa. Agende consultas online com apenas alguns cliques, de maneira rápida e prática.",
        icon: "💻", // Substitua por um ícone adequado, se necessário
      },
      {
        title: "Profissionais qualificados",
        description:
          "Psicólogos e psiquiatras experientes e certificados, prontos para oferecer o suporte necessário para o seu bem-estar mental.",
        icon: "🎓",
      },
      {
        title: "Confidencialidade garantida",
        description:
          "Todo o processo é seguro e protegido. Suas informações pessoais e suas sessões são mantidas em total confidencialidade.",
        icon: "🔒",
      },
      {
        title: "Flexibilidade em consultas",
        description:
          "Escolha entre consultas online ou presenciais, conforme sua preferência e necessidade, para um atendimento personalizado.",
        icon: "🗓",
      },
      {
        title: "Cuidado contínuo",
        description:
          "Agende consultas recorrentes e mantenha acompanhamento constante, garantindo progresso contínuo.",
        icon: "🔄",
      },
      {
        title: "Suporte nas especialidades",
        description:
          "Encontre profissionais especializados em diferentes áreas da psicologia e psiquiatria, para o suporte ideal em qualquer situação.",
        icon: "🧩",
      },
    ];
  
    return (
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${
              index % 2 === 0 ? "bg-emerald-700 text-white" : "bg-gray-100"
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