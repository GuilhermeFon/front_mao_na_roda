export default function TermsOfUse() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Termos de Uso</h1>
        <p className="text-gray-600 mb-4">
          Bem-vindo aos Termos de Uso da Mão na Roda Estes termos regem o uso de
          nossa plataforma e a relação entre prestadores de serviços e clientes.
          Ao usar nosso site, você concorda em cumprir estes termos.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Sobre a Plataforma
          </h2>
          <p className="text-gray-600">
            Nossa plataforma conecta clientes que buscam serviços a prestadores
            de serviços especializados. Não somos responsáveis pela execução
            direta dos serviços contratados, sendo nossa função apenas
            intermediar a conexão entre as partes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Cadastro de Usuários
          </h2>
          <p className="text-gray-600">
            Para utilizar nossos serviços, é necessário criar uma conta
            fornecendo informações precisas, completas e atualizadas. O usuário
            é responsável por manter a confidencialidade de suas credenciais.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Obrigações dos Prestadores de Serviços
          </h2>
          <p className="text-gray-600">Prestadores de serviços devem:</p>
          <ul className="list-disc ml-6 text-gray-600">
            <li>
              Fornecer informações verdadeiras sobre suas habilidades e
              serviços.
            </li>
            <li>
              Cumprir com os acordos feitos com os clientes de forma ética e
              profissional.
            </li>
            <li>Respeitar todas as leis e regulamentações aplicáveis.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Obrigações dos Clientes
          </h2>
          <p className="text-gray-600">Os clientes devem:</p>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Fornecer informações precisas sobre o serviço necessário.</li>
            <li>Respeitar os termos acordados com o prestador de serviços.</li>
            <li>Efetuar os pagamentos dentro dos prazos estabelecidos.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Pagamentos e Taxas
          </h2>
          <p className="text-gray-600">
            A plataforma pode cobrar taxas de serviço sobre as transações
            realizadas. Essas taxas serão informadas previamente e podem variar
            dependendo do tipo de serviço contratado.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Limitação de Responsabilidade
          </h2>
          <p className="text-gray-600">
            Não nos responsabilizamos por quaisquer disputas, danos ou prejuízos
            decorrentes da relação entre clientes e prestadores de serviços.
            Nossa plataforma atua apenas como um intermediário.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Rescisão e Suspensão de Conta
          </h2>
          <p className="text-gray-600">
            Reservamo-nos o direito de suspender ou encerrar contas que violem
            nossos termos de uso ou que sejam identificadas como fraudulentas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Alterações nos Termos
          </h2>
          <p className="text-gray-600">
            Podemos atualizar estes Termos de Uso periodicamente. As alterações
            entrarão em vigor após a publicação na plataforma. Recomendamos que
            você revise esta página regularmente.
          </p>
        </section>

        <p className="text-gray-600 mt-8">
          Caso tenha dúvidas sobre estes Termos de Uso, entre em contato conosco
          pelo e-mail
          <a
            href="mailto:contato@seuprojeto.com"
            className="text-blue-600 hover:underline"
          >
            {' '}
            contato@maonaroda.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
