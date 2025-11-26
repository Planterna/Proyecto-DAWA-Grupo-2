export interface Reserva {
  id: number;
  idRecurso: number;
  nombreRecurso?: string;
  usuario: string;
  fechaInicio: string; 
  fechaFin: string;    
  observacion?: string;
  estado?: 'activa' | 'cancelada' | 'finalizada';
}
