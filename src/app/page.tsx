// import { useState } from "react";
import Image from "next/image";
import {Home} from "./home/page";
import WhatsappLogo from "@/assets/icones/Whatsapp_azul.svg";

// import { useClienteStore } from "@/context/cliente";
// import  SocialMediaLinks from "@/components/SocialMediaLinks"
// import { useEffect } from "react";

export default function Page() {
  // const {logaCliente} = useClienteStore()

  // useEffect(() => {

  //   async function buscaCliente(idCliente: string, tokenCliente: string) {
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/${idCliente}`,{
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": `Bearer ${tokenCliente}`
  //       },
  //       method: "GET",
  //     })
  //     if (response.status == 200) {
  //       const dados = await response.json()
  //       console.log(dados)
  //       logaCliente(dados)
  //     }
  //   }
  //   if (localStorage.getItem("client_key")) {
  //     const idClienteLocal = localStorage.getItem("client_key") as string
  //     const tokenLocal = localStorage.getItem("token_key") as string

  //     buscaCliente(idClienteLocal, tokenLocal)
  //     console.log("client_key:", localStorage.getItem("client_key"));
  //   }

  // }, []);

  return (
    <main>
      <Home />
      {/* <Image src={WhatsappLogo} alt="" width={24} height={24} /> */}
    </main>
  );
}
