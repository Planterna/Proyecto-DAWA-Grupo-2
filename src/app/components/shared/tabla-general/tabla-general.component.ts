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
  @Output() accion = new EventEmitter<{ tipo: string, elemento: any }>();
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



// reservaciones: Reservaciones[] = [];
//   recursos: Recursos[] = [];
//   reservacion!: Reservaciones;
//   info: string = '';
//   funciones = new FuncionesVarias();

//   router = inject(Router);
//   private resolverModal!: (value: boolean) => void;
//   constructor(private miServicio: ServReservaciones) {}

//   ngOnInit(): void {
//     this.loadReservas();
//   }
//   loadReservas(): void {
//     this.miServicio.getReservas().subscribe((data: Reservaciones[]) => (this.reservaciones = data));
//   }
//   visualizarReserva(id: number, infor: string) {
//     this.miServicio.getReservaById(id).subscribe((data) => {
//       this.info = infor;
//       this.reservacion = data;
//       setTimeout(() => {
//         const modal = this.funciones.asignarModal();
//         modal.show();
//       });
//     });
//   }

//   searchByName(name: string) {
//     this.miServicio
//       .searchReservasForName(name)
//       .subscribe((data: Reservaciones[]) => (this.reservaciones = data));
//   }
//   charge() {
//     this.loadReservas();
//   }
//   esperarRespuestaModal(): Promise<boolean> {
//     return new Promise((resolve) => {
//       this.resolverModal = resolve;
//     });
//   }

//   respuestaModal(valor: boolean) {
//     this.resolverModal(valor);
//   }

//   async deleteReserva(id: number, infor: string) {
//     this.visualizarReserva(id, infor);

//     const confirmado = await this.esperarRespuestaModal();

//     if (!confirmado) {
//       console.log('Eliminación cancelada.');
//       return this.visualizarReserva(id, 'alert');
//     }
//     this.visualizarReserva(id, 'success');
//     setTimeout(() => {
//       this.miServicio.deleteReserva(id).subscribe((reservaActualizada: Reservaciones) => {
//         this.reservacion = reservaActualizada;
//       });
//     }, 3000);
//   }
//   activarReserva(id: number, infor: string) {
//     this.visualizarReserva(id, infor);
//     setTimeout(() => {
//       this.miServicio.activarReserva(id).subscribe((reservaActualizada: Reservaciones) => {
//         this.reservacion = reservaActualizada;
//       });
//     }, 3000);
//   }
