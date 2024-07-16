import { Component } from '@angular/core';
import { Alumno } from './interfaces/Alumno.Interface';
import { Clase } from './interfaces/Clase.interface';
import { Curso } from './interfaces/Curso.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primer-entregable-leidy-uribe';

  alumnos: Alumno[] = [
    {
      id: 1,
      nombre: 'Leidy',
      Apellido: 'Uribe Marcos',
      edad: 32,
      estaAprobado: false
    },
    {
      id: 2,
      nombre: 'Leonardo',
      Apellido: 'Tenorio Marcos',
      edad: 28,
      estaAprobado: true
    }
  ];

  clases: Clase[] = [
    {
      id: 1,
      nombreClase: 'Directivas',
      activo: true,
    },
    {
      id: 2,
      nombreClase: 'Decoradores',
      activo: false,
    },
    {
      id: 3,
      nombreClase: 'Pipes',
      activo: true,
    }
  ];

  cursos: Curso[] = [
    {
      id: 1,
      activo: true,
      nombreCurso: 'Angular'
    },
    {
      id: 2,
      activo: true,
      nombreCurso: 'React'
    },
    {
      id: 3,
      activo: true,
      nombreCurso: 'Java'
    }
  ];

  eliminarAlumno(idEliminar: number) {
    this.alumnos = this.alumnos.filter((alumno) => alumno.id != idEliminar);
  }

  eliminarClase(idEliminarClase: number) {
    this.clases = this.clases.filter((clase) => clase.id != idEliminarClase);
  }

  eliminarCurso(idEliminarCurso: number) {
    this.cursos = this.cursos.filter((curso) => curso.id != idEliminarCurso);
  }
}
