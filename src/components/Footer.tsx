import Image from 'next/image';

import InverseLogoImage from '@/assets/icones/logo_azul_escuro_e_nome.svg';
import MailIcon from '@/assets/icones/icone_mail.svg';
import LocationIcon from '@/assets/icones/icone_localizacao.svg';
import WhatsIcon from '@/assets/icones/icone_whats.svg';
import EncanadorFooterImage from '@/assets/encanador_footer.png';

export function Footer() {
  return (
    <footer className="bg-AzulForte ">
      <div className="w-100%">
        <div className=" flex  mx-auto max-w-screen-xl">
          <div className="w-2/3 min-h-full">
            {/* cards */}
            <div className="grid grid-cols-2 h-5/6 ">
              <div className="flex flex-col col-start h-full justify-evenly">
                <div className=" max-w-72">
                  {' '}
                  <Image
                    src={InverseLogoImage}
                    alt=""
                    width={200}
                    height={48}
                  />
                </div>
                <div className=" max-w-72 text-gray-200 row-start-2">
                  {' '}
                  <p>
                    Conectando você aos melhores profissionais para serviços
                    rápidos e confiáveis. Seu lar em boas mãos!
                  </p>
                </div>
              </div>
              <div className="col-start-2 flex flex-col col-start text-gray-200 h-full justify-evenly">
                <div className="w-60 flex flex-row justify-start items-center ">
                  {' '}
                  <Image src={MailIcon} alt="" width={24} height={24} />{' '}
                  <p className="ps-2">suporte@maonaroda.com</p>
                </div>
                <div className="w-60 flex flex-row justify-start items-center">
                  {' '}
                  <Image
                    src={LocationIcon}
                    alt=""
                    width={24}
                    height={24}
                  />{' '}
                  <p className="ps-2">Pelotas, RS - Sede</p>
                </div>
                <div className="w-60 flex flex-row justify-start text-wrap items-center">
                  {' '}
                  <Image src={WhatsIcon} alt="" width={24} height={24} />{' '}
                  <div className="flex flex-col text-center">
                    {' '}
                    <p className="">Whats App </p>{' '}
                    <p className="ps-2">(53) 99643 - 0964</p>
                  </div>
                </div>
              </div>
            </div>

            {/* copyright */}
            <div className="flex items-center h-1/6  text-gray-200 border-t border-t-AzulHr">
              <p>Copyright © 2024. a senac_rs_project. All rights reserved.</p>
            </div>
          </div>
          <div className="w-1/3 h-full">
            <Image
              className="max-h-96"
              src={EncanadorFooterImage}
              alt=""
              width={384}
              height={384}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
