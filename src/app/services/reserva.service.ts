import { Injectable } from '@angular/core';
import { Reserva } from '../models/reserva.model';
import { Observable, of } from 'rxjs';

const KEY = 'app_reservas_v1';

@Injectable({ providedIn: 'root' })
export class ReservaService {
  private reservas: Reserva[] = [];

  constructor() {
    const stored = localStorage.getItem(KEY);
    if (stored) this.reservas = JSON.parse(stored);
  }

  getAll(): Observable<Reserva[]> {
    return of(this.reservas);
  }

  create(r: Reserva): Observable<Reserva> {
    r.id = this.nextId();
    r.estado = 'activa';
    this.reservas.push(r);
    this.save();
    return of(r);
  }

  update(reserva: Reserva): Observable<Reserva> {
    const idx = this.reservas.findIndex(x => x.id === reserva.id);
    if (idx > -1) this.reservas[idx] = reserva;
    this.save();
    return of(reserva);
  }

  delete(id: number): Observable<boolean> {
    this.reservas = this.reservas.filter(r => r.id !== id);
    this.save();
    return of(true);
  }

  private nextId(): number {
    return this.reservas.length ? Math.max(...this.reservas.map(r => r.id)) + 1 : 1;
  }

  private save() {
    localStorage.setItem(KEY, JSON.stringify(this.reservas));
  }
}
