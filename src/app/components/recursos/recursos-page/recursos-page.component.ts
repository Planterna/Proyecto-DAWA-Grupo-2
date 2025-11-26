import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BuscadorComponent } from '../buscador/buscador.component';
import { FiltroComponent } from '../filtro/filtro.component';
import { TablaGeneralComponent } from '../../shared/tabla-general/tabla-general.component';
 

@Component({
  selector: 'app-recursos-page',
  standalone: true,
  imports: [
    HeaderComponent,
    BuscadorComponent,
    FiltroComponent,
    TablaGeneralComponent
  ],
  templateUrl: './recursos-page.component.html',
  styleUrl: './recursos-page.component.css'
})
export class RecursosPageComponent {
  columnas = ['recurso','categoria','estado','horarios']; // ejemplo
  datos = [
    { recurso: 'Sala 1', categoria: 'Herramientas', estado: 'Disponible', horarios: '08:00-10:00' },
    { recurso: 'Sala 2', categoria: 'Salones', estado: 'Ocupado', horarios: '10:00-12:00' }
  ];

  // Este método recibe el evento desde tabla-general
  manejarAccion(evento: { tipo: string, elemento: any }) {
    console.log('Acción recibida:', evento.tipo, 'en el elemento:', evento.elemento);

    switch(evento.tipo) {
      case 'reservar':
        console.log('Reservar:', evento.elemento);
        break;
      case 'solicitar':
        console.log('Solicitar:', evento.elemento);
        break;
    }
  }
}

