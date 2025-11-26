import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-general',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-general.component.html',
  styleUrls: ['./tabla-general.component.css']
})
export class TablaGeneralComponent {

  @Input() columns: string[] = [];
  @Input() data: any[] = [];
  @Output() action = new EventEmitter<{ type: string, item: any }>();
  @Input() actions: string[] = []; 

  menuOpenFor: number | null = null;

  toggleMenu(id: number) {
    this.menuOpenFor = this.menuOpenFor === id ? null : id;
  }

  doAction(type: string, item: any) {
    this.action.emit({ type, item });
    this.menuOpenFor = null;
  }

  cellValue(row: any, col: string) {
    if (!row) return '';
    const key = col.toLowerCase();
    return row[key] ?? row[col] ?? '';
  }
}
