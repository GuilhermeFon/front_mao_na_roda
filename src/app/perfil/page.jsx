import React from "react";
import Image from "next/image";

export default function perfil() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 flex justify-center">
            <img src="./profissionais_2.png" className="rounded-lg w-[300px] h-[300]" alt="foto do usuário">


            </img>

          </div>
          <div className="lg:w-2/3">
            <div className="flex flex-col lg:flex-row items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Pedro Sampaio
                </h2>
                <p className="text-blue-500 font-medium">Encanador</p>
              </div>

              <div className="flex gap-3 mt-4 lg:mt-0">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Tenho mais de 10 anos de experiência
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Qualificações:
              </h3>
              <ul className="mt-4 space-y-3">

                <li className="text-gray-600">
                  <strong># 2013 :</strong> Curso de Manutenção Predial (Instituto Mix)
                </li>
                <li className="text-gray-600">
                  <strong># 2016 :</strong> Certificação em Segurança no Trabalho (Senac-rs)
                </li>
                <li className="text-gray-600">
                  <strong># 2019 :</strong> Formação em Hidráulica (Senai)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Experiências:
          </h3>
          <p className="text-gray-600 mb-6">
          Com mais de 10 anos de atuação no Sanep, meus serviços de encanamento garantem soluções rápidas e eficazes para qualquer tipo de instalação ou reparo hidráulico.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Especialista em conserto de vazamentos e substituição de tubulações.</li>
            <li>Experiência em instalação de sistemas de água quente e fria.</li>
            <li>Manutenção preventiva de redes hidráulicas para evitar emergências.</li>
            <li>Atendimento emergencial 24 horas, com resposta rápida e precisa.</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Serviços concluídos:
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Chamados Concluídos</span>
                <span className="text-gray-600">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-yellow-500 h-4 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">
                  Habilidades de encanamento
                </span>
                <span className="text-gray-600">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-yellow-500 h-4 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Confiável e trabalhador</span>
                <span className="text-gray-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-yellow-500 h-4 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


