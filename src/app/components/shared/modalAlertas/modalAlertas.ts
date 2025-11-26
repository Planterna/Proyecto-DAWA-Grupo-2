import { Component, input, output } from '@angular/core';
import { Reservaciones } from '../../../models/reservaciones';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-modal-alertas',
  imports: [UpperCasePipe],
  templateUrl: './modalAlertas.html',
})
export class ModalAlertas {
  reservacion!: Reservaciones;

  datos = input.required<Reservaciones>();
  informacion = input.required<string>();
  respuesta = output<boolean>();

  aceptar() {
    this.respuesta.emit(true);
  }

  rechazar() {
    this.respuesta.emit(false);
  }
}
