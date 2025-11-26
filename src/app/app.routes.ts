import { Routes } from '@angular/router';
import { Inicio } from './components/shared/Inicio/Inicio';

export const routes: Routes = [
  {
    path:"",
    component: Inicio,
    pathMatch: 'full'

  }
  // {
  //   path: 'cuadro-alerta',
  //   component: CuadroAlerta,
  // },
  // {
  //   path: 'tabla-reutilizable',
  //   component: TablaReutilizable,
  // },
  // {
  //   path: '',
  //   redirectTo: 'tabla-reutilizable',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '**',
  //   redirectTo: 'tabla-reutilizable',
  // },
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./components/recursos/recursos-page/recursos-page.component')
  //       .then(m => m.RecursosPageComponent)
  // },
  // {
  //   path: 'reservas',
  //   loadComponent: () =>
  //     import('./components/reservas/reservas-page/reservas-page.component')
  //       .then(m => m.ReservasPageComponent)
  // },

];
