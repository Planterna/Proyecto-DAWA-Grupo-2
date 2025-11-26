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
    { name: 'Deportes', checked: false },
    { name: 'Salones', checked: false },
    { name: 'Herramientas', checked: false },
  ];

  toggleAcordeon() {
    this.abierto = !this.abierto;
  }

  toggleCategoria(cat: any) {
    cat.checked = !cat.checked;
  }

  limpiar() {
    this.categorias.forEach(c => c.checked = false);
  }
}
