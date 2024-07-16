import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoDialogComponent } from './components/alumno-dialog/alumno-dialog.component';
import { Alumno } from '../../../interfaces/Alumno.Interface';

const ELEMENT_DATA: Alumno[] = [
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

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {
  nombreAlumno = '';
  alumno: Alumno | null = null;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(private matDialog: MatDialog) {

  }

  openDialog() {
    this.matDialog.open(AlumnoDialogComponent).afterClosed().subscribe({
      next: (value) => {
        console.log('Recibimos el valor: ', value);
        if(value) {
          this.alumno = value;
        }
      }
    });
  }
}
