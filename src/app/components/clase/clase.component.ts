import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Clase } from '../../interfaces/Clase.interface';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrl: './clase.component.scss'
})
export class ClaseComponent {
  @Input() dataClases: Clase[] = [];
  @Output() eliminarClase = new EventEmitter();
}
