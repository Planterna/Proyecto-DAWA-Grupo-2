import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {

  abierto = true; // acordeón abierto

  categorias = [
    { nombre: 'Deportes', marcado: false },
    { nombre: 'Salones', marcado: false },
    { nombre: 'Herramientas', marcado: false },
  ];

  alternarAcordeon() {
    this.abierto = !this.abierto;
  }

  alternarCategoria(cat: any) {
    cat.marcado = !cat.marcado;
  }

  limpiar() {
    this.categorias.forEach(c => c.marcado = false);
  }
}
