import InstagramImage from '@/assets/icones/instagram.svg';
import LinkedinImage from '@/assets/icones/linkedin.svg';
import InverseLogoImage from '@/assets/nomeBranco.png';

import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#082D53] text-white py-10 px-2">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-14">
        <div className="w-full lg:w-1/2">
          <div className="mb-4">
            <Image src={InverseLogoImage} alt="" width={200} height={48} />
          </div>
          <div className="mb-6">
            <p>
              Conectando você aos melhores profissionais para serviços rápidos e
              confiáveis.
            </p>
            <p>Seu lar em boas mãos!</p>
          </div>
          <div className="flex space-x-2">
            <a href="https://www.linkedin.com" target="_blank">
              <Image
                src={LinkedinImage}
                width={24}
                height={24}
                alt="Linkedin"
              />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <Image
                src={InstagramImage}
                width={24}
                height={24}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-14 md:gap-0 md:flex-row justify-between">
          <div className="min-w-40">
            <h3 className="font-semibold mb-2">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Lorem Ipsum
                </a>
              </li>
            </ul>
          </div>

          <div className="min-w-40">
            <h3 className="font-semibold mb-2">Popular Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Lorem Ipsum
                </a>
              </li>
            </ul>
          </div>

          <div className="min-w-40">
            <h3 className="font-semibold mb-2">Outros Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contato" className="hover:text-primary">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link href="/politicas" className="hover:text-primary">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-primary">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t border-foreground-light mt-8 pt-8 text-center text-sm ">
        © 2024 Projeto integrador | Produced with GV
      </div>
    </footer>
  );
}
