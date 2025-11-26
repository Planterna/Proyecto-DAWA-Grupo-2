import { Injectable } from '@angular/core';
import { Reserva } from '../models/reserva.model';
import { Observable, of } from 'rxjs';

const CLAVE = 'app_reservas_v1';

@Injectable({ providedIn: 'root' })
export class ServicioReserva {
  private reservas: Reserva[] = [];

  constructor() {
    const almacenado = localStorage.getItem(CLAVE);
    if (almacenado) this.reservas = JSON.parse(almacenado);
  }

  obtenerTodas(): Observable<Reserva[]> {
    return of(this.reservas);
  }

  crear(r: Reserva): Observable<Reserva> {
    r.id = this.proximoId();
    r.estado = 'activa';
    this.reservas.push(r);
    this.guardar();
    return of(r);
  }

  actualizar(reserva: Reserva): Observable<Reserva> {
    const idx = this.reservas.findIndex(x => x.id === reserva.id);
    if (idx > -1) this.reservas[idx] = reserva;
    this.guardar();
    return of(reserva);
  }

  eliminar(id: number): Observable<boolean> {
    this.reservas = this.reservas.filter(r => r.id !== id);
    this.guardar();
    return of(true);
  }

  private proximoId(): number {
    return this.reservas.length ? Math.max(...this.reservas.map(r => r.id)) + 1 : 1;
  }

  private guardar() {
    localStorage.setItem(CLAVE, JSON.stringify(this.reservas));
  }
}
