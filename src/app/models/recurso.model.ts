export interface Recurso {
  id: number;
  nombre: string;
  descripcion?: string;
  categoria: string;
  capacidad?: number;
  cantidad?: number;
  disponible: boolean;
  ubicacion?: string;
}
