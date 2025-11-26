import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recurso } from '../models/recurso.model';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

const CLAVE_ALMACENAMIENTO = 'app_recursos_v1';

@Injectable({ providedIn: 'root' })
export class ServicioRecurso {
  private url = '/json/recursos.json';
  private recursos: Recurso[] = [];

  constructor(private http: HttpClient) {}

  // carga inicial: si hay localStorage usa eso, si no lee JSON
  cargarDatosIniciales(): Observable<Recurso[]> {
    const almacenado = localStorage.getItem(CLAVE_ALMACENAMIENTO);
    if (almacenado) {
      this.recursos = JSON.parse(almacenado) as Recurso[];
      return of(this.recursos);
    }
    return this.http.get<Recurso[]>(this.url).pipe(
      tap(arr => {
        this.recursos = arr;
        localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(this.recursos));
      })
    );
  }

  obtenerTodos(): Observable<Recurso[]> {
    if (this.recursos.length) return of(this.recursos);
    return this.cargarDatosIniciales();
  }

  obtenerPorId(id: number): Observable<Recurso | undefined> {
    return of(this.recursos.find(r => r.id === id));
  }

  crear(recurso: Recurso): Observable<Recurso> {
    recurso.id = this.proximoId();
    this.recursos.push(recurso);
    this.guardar();
    return of(recurso);
  }

  actualizar(recurso: Recurso): Observable<Recurso> {
    const idx = this.recursos.findIndex(r => r.id === recurso.id);
    if (idx > -1) this.recursos[idx] = recurso;
    this.guardar();
    return of(recurso);
  }

  eliminar(id: number): Observable<boolean> {
    this.recursos = this.recursos.filter(r => r.id !== id);
    this.guardar();
    return of(true);
  }

  private proximoId(): number {
    return this.recursos.length ? Math.max(...this.recursos.map(r => r.id)) + 1 : 1;
  }

  private guardar() {
    localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(this.recursos));
  }
}
