import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Política de Privacidade
        </h1>
        <p className="text-gray-600 mb-4">
          Bem-vindo à nossa Política de Privacidade. Sua privacidade é
          extremamente importante para nós. Esta política explica como
          coletamos, usamos e protegemos suas informações.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Informações que Coletamos
          </h2>
          <p className="text-gray-600">
            Podemos coletar informações pessoais, como seu nome, endereço de
            e-mail, número de telefone, e quaisquer outros dados fornecidos por
            você ao utilizar nosso site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Como Usamos Suas Informações
          </h2>
          <p className="text-gray-600">
            As informações coletadas são utilizadas para melhorar nossos
            serviços, personalizar sua experiência e enviar atualizações
            relevantes sobre nosso site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Compartilhamento de Informações
          </h2>
          <p className="text-gray-600">
            Não compartilhamos suas informações pessoais com terceiros, exceto
            quando necessário para cumprir a lei ou proteger nossos direitos
            legais.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Seus Direitos
          </h2>
          <p className="text-gray-600">
            Você tem o direito de acessar, corrigir ou excluir suas informações
            pessoais. Entre em contato conosco para exercer esses direitos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Alterações nesta Política
          </h2>
          <p className="text-gray-600">
            Podemos atualizar esta política periodicamente. Recomendamos que
            você revise esta página regularmente para se manter informado.
          </p>
        </section>

        <p className="text-gray-600 mt-8">
          Se você tiver alguma dúvida sobre nossa Política de Privacidade, entre
          em contato conosco em
          <a
            href="mailto:maonaroda@gmail.com"
            className="text-blue-600 hover:underline"
          >
            {' '}
            maonaroda@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
