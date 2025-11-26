import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/recursos/recursos-page/recursos-page.component')
        .then(m => m.RecursosPageComponent)
  },
  {
    path: 'reservas',
    loadComponent: () =>
      import('./components/reservas/reservas-page/reservas-page.component')
        .then(m => m.ReservasPageComponent)
  },
 
];
