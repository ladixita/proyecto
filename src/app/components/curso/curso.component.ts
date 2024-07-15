import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from '../../interfaces/Curso.interface';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.scss'
})
export class CursoComponent {
  @Input() dataCursos: Curso[] = [];
  @Output() eliminarCurso = new EventEmitter();
}
