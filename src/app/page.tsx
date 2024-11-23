// import { useState } from "react";
import {Home} from "./home/page";
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
    </main>
  );
}
