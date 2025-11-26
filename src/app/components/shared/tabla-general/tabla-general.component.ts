import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-general',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-general.component.html',
  styleUrls: ['./tabla-general.component.css'],
})
export class TablaGeneralComponent {
  @Input() columnas: string[] = [];
  @Input() datos: any[] = [];
  @Output() accion = new EventEmitter<{ tipo: string; elemento: any }>();
  @Input() acciones: string[] = [];

  menuAbiertoPara: number | null = null;

  alternarMenu(id: number) {
    this.menuAbiertoPara = this.menuAbiertoPara === id ? null : id;
  }

  ejecutarAccion(tipo: string, elemento: any) {
    this.accion.emit({ tipo, elemento });
    this.menuAbiertoPara = null;
  }

  obtenerValorCelda(fila: any, columna: string) {
    if (!fila) return '';
    const clave = columna.toLowerCase();
    return fila[clave] ?? fila[columna] ?? '';
  }
}
