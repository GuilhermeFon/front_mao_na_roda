export interface AvaliacaoI {
  id: number;
  usuarioId: string;
  prestadorId: number;
  servicoId: number;
  nota: number; 
  comentario?: string;
  createdAt: Date;
}