export interface ReservaI {
    id: number;
    usuarioId: string;
    servicoId: number;
    data: Date;
    status: StatusReserva;
    createdAt: Date;
    updatedAt: Date;
}


export enum StatusReserva {
    Pendente = 'PENDENTE',
    Confirmada = 'CONFIRMADA',
    Cancelada = 'CANCELADA'
}


