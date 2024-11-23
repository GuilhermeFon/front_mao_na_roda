import { ReservaI } from "./reserva";

export interface PropostaI {
    id: number;
    nome: string;
    descricao?: string;
    preco: number;  
    prestadorId: number;
    reservas: ReservaI[]; 
    createdAt: Date;
    updatedAt: Date;
}

