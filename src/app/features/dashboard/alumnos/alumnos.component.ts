import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoDialogComponent } from './components/alumno-dialog/alumno-dialog.component';
import { Alumno } from '../../../interfaces/Alumno.Interface';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {
  nombreAlumno = '';
  alumno!: Alumno;

  constructor(private matDialog: MatDialog) {

  }

  openDialog() {
    this.matDialog.open(AlumnoDialogComponent).afterClosed().subscribe({
      next: (value) => {
        console.log('Recibimos el valor: ', value);
        this.alumno = value;
      }
    });
  }
}
