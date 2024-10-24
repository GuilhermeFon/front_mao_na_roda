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
                  {" "}
                  <img src="./icones/logo_azul_escuro_e_nome.svg" alt="" />
                </div>
                <div className=" max-w-72 text-gray-200 row-start-2">
                  {" "}
                  <p>
                    Conectando você aos melhores profissionais para serviços
                    rápidos e confiáveis. Seu lar em boas mãos!
                  </p>
                </div>
                <div className=" max-w-56 flex  container justify-between">
                  <a className="" href="#" aria-label="Facebook">
                    <img src="./icones/facebook_branco_circulo.svg" alt="" />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <img src="./icones/twitter_branco_circulo.svg" alt="" />
                  </a>
                  <a href="#" aria-label="YouTube">
                    <img src="./icones/youtube_branco_circulo.svg" alt="" />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <img src="./icones/instagram_branco_circulo.svg" alt="" />
                  </a>
                  <a className="" href="#" aria-label="LinkedIn">
                    <img src="./icones/linkedin_branco_circulo.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-start-2 flex flex-col col-start text-gray-200 h-full justify-evenly">
                <div className="w-60 flex flex-row justify-start items-center ">
                  {" "}
                  <img src="./icones/icone_mail.svg" alt="" />{" "}
                  <p className="ps-2">suporte@maonaroda.com</p>
                </div>
                <div className="w-60 flex flex-row justify-start items-center">
                  {" "}
                  <img src="./icones/icone_localizacao.svg" alt="" />{" "}
                  <p className="ps-2">Pelotas, RS - Sede</p>
                </div>
                <div className="w-60 flex flex-row justify-start text-wrap items-center">
                  {" "}
                  <img src="./icones/icone_whats.svg" alt="" />{" "}
                  <div className="flex flex-col text-center">
                    {" "}
                    <p className="">Whats App </p>{" "}
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
            <img className="max-h-96" src="encanador_footer.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
