import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

import { ClienteI } from '@/utils/types/clientes';

type ClienteStore = {
  cliente: ClienteI;
  logaCliente: (clienteLogado: ClienteI) => void;
  deslogaCliente: () => void;
};

export const useClienteStore = create<ClienteStore>()(
  persist<ClienteStore>(
    (set) => ({
      cliente: {} as ClienteI,
      logaCliente: (clienteLogado) => {
        set({ cliente: clienteLogado }); 
      },
      deslogaCliente: () => {
        set({ cliente: {} as ClienteI });
      },
    }),
    {
      name: 'cliente-storage', // nome do storage (localStorage)
    } as PersistOptions<ClienteStore>,
  ),
);
