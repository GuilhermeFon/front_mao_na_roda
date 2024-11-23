import { ReservaI } from "./reserva";
import { AvaliacaoI } from "./avaliacoes";

export interface UsuarioI {
    id: string;
    nome: string;
    email: string;
    senha: string;
    tipo: TipoUsuario; 
    createdAt: Date;
    updatedAt: Date;
    prestadorId?: number;
    reservas: ReservaI[]; 
    avaliacoes: AvaliacaoI[]; 
}
export enum TipoUsuario {
    Cliente = 'CLIENTE',
    Prestador = 'PRESTADOR'
}