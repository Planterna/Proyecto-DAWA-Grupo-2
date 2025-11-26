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
  columns = ['recurso','categoria','estado','horarios']; // ejemplo
  data = [
    { recurso: 'Sala 1', categoria: 'Aula', estado: 'Disponible', horarios: '08:00-10:00' },
    { recurso: 'Sala 2', categoria: 'Aula', estado: 'Ocupado', horarios: '10:00-12:00' }
  ];

  // Este método recibe el evento desde tabla-general
  onAction(event: { type: string, item: any }) {
    console.log('Acción recibida:', event.type, 'en el ítem:', event.item);

    switch(event.type) {
      case 'reservar':
        console.log('Reservar:', event.item);
        break;
      case 'solicitar':
        console.log('Solicitar:', event.item);
        break;
    }
  }
}

