import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../../interfaces/Alumno.Interface';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.scss'
})
export class AlumnoComponent {
  @Input() dataAlumnos: Alumno[] = [];
  @Output() eliminarAlmno = new EventEmitter();

  agregarAlumno() {
    
  }
}
