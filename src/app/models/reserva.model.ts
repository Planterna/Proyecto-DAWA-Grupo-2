export interface Reserva {
  id: number;
  recursoId: number;
  recursoNombre?: string;
  usuario: string;
  fechaInicio: string; 
  fechaFin: string;    
  observacion?: string;
  estado?: 'activa' | 'cancelada' | 'finalizada';
}
