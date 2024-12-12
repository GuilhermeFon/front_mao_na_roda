import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

import { ClienteI } from '@/utils/types/clientes';

type ClienteStore = {
  cliente: ClienteI;
  logaCliente: (clienteLogado: ClienteI) => void;
  deslogaCliente: () => void;
  setCliente: (cliente: Partial<ClienteI>) => void;
};

export const useClienteStore = create<ClienteStore>()(
  persist<ClienteStore>(
    (set, get) => ({
      cliente: {} as ClienteI,
      logaCliente: (clienteLogado) => {
        set({ cliente: clienteLogado });
      },
      deslogaCliente: () => {
        set({ cliente: {} as ClienteI });
      },
      setCliente: (cliente) => {
        set((state) => ({
          cliente: { ...state.cliente, ...cliente },
        }));
      },
    }),
    {
      name: 'cliente-storage',
    } as PersistOptions<ClienteStore>,
  ),
);
