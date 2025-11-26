import { Component } from '@angular/core';
import { HeaderComponent } from '../../recursos/header/header.component';

@Component({
  selector: 'app-reservas-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './reservas-page.component.html',
  styleUrls: ['./reservas-page.component.css']
})
export class ReservasPageComponent {
  title = 'Reservas';
}
