import React from 'react';

import AccordionItem from './components/AccordionItem';


const Faq = () => {
  return (
    <section className="container mx-auto text-center py-10 lg:py-20 px-2">
      <div className="w-full mx-auto">
        <h2 className="text-4xl text-foreground leading-[1.1] font-semibold tracking-wider mb-14">
          Perguntas Frequentes
        </h2>
        <div className="w-full grid grid-cols-1 gap-6">
          <AccordionItem
            title="Como funciona o Mão na Roda?"
            content="O Mão na Roda conecta clientes a prestadores de serviços qualificados, como eletricistas, encanadores, pintores, entre outros. Os clientes podem agendar serviços, ver avaliações e realizar pagamentos diretamente pela plataforma."
          />
          <AccordionItem
            title="Quais serviços estão disponíveis no Mão na Roda?"
            content="O Mão na Roda oferece uma ampla gama de serviços, incluindo serviços domésticos, reparos, jardinagem, reformas, e muito mais. Você pode consultar os serviços disponíveis diretamente no site e buscar profissionais por categoria."
          />
          <AccordionItem
            title="Como posso agendar um serviço?"
            content="Para agendar um serviço, basta escolher o profissional desejado, selecionar a data e horário disponíveis, e confirmar o agendamento. Você receberá uma confirmação do agendamento por e-mail."
          />
          <AccordionItem
            title="Preciso criar uma conta para usar o Mão na Roda?"
            content="Sim, é necessário criar uma conta para agendar serviços, deixar avaliações e gerenciar suas informações. O cadastro pode ser feito de forma simples e rápida pelo nosso site."
          />
          <AccordionItem
            title="Como posso avaliar um prestador de serviço?"
            content="Após a conclusão do serviço, você pode avaliar o prestador de serviço diretamente na plataforma. Basta acessar o histórico de serviços e deixar sua avaliação com base na experiência que teve."
          />
          <AccordionItem
            title="O pagamento é feito como?"
            content="O pagamento dos serviços pode ser feito diretamente com o profissional, com opções de pagamento seguras e práticas, como cartão de crédito. O pagamento é realizado após a conclusão do serviço."
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
