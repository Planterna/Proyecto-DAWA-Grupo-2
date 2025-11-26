// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Recurso } from '../models/recurso.model';
// import { Observable, of } from 'rxjs';
// import { tap } from 'rxjs/operators';

// const STORAGE_KEY = 'app_recursos_v1';

// @Injectable({ providedIn: 'root' })
// export class RecursoService {
//   private url = '/json/recursos.json';
//   private recursos: Recurso[] = [];

//   constructor(private http: HttpClient) {}

//   // carga inicial: si hay localStorage usa eso, si no lee JSON
//   loadInitialData(): Observable<Recurso[]> {
//     const stored = localStorage.getItem(STORAGE_KEY);
//     if (stored) {
//       this.recursos = JSON.parse(stored) as Recurso[];
//       return of(this.recursos);
//     }
//     return this.http.get<Recurso[]>(this.url).pipe(
//       tap(arr => {
//         this.recursos = arr;
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(this.recursos));
//       })
//     );
//   }

//   getAll(): Observable<Recurso[]> {
//     if (this.recursos.length) return of(this.recursos);
//     return this.loadInitialData();
//   }

//   getById(id: number): Observable<Recurso | undefined> {
//     return of(this.recursos.find(r => r.id === id));
//   }

//   create(recurso: Recurso): Observable<Recurso> {
//     recurso.id = this.nextId();
//     this.recursos.push(recurso);
//     this.save();
//     return of(recurso);
//   }

//   update(recurso: Recurso): Observable<Recurso> {
//     const idx = this.recursos.findIndex(r => r.id === recurso.id);
//     if (idx > -1) this.recursos[idx] = recurso;
//     this.save();
//     return of(recurso);
//   }

//   delete(id: number): Observable<boolean> {
//     this.recursos = this.recursos.filter(r => r.id !== id);
//     this.save();
//     return of(true);
//   }

//   private nextId(): number {
//     return this.recursos.length ? Math.max(...this.recursos.map(r => r.id)) + 1 : 1;
//   }

//   private save() {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(this.recursos));
//   }
// }
