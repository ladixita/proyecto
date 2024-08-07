import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoDialogComponent } from './components/alumno-dialog/alumno-dialog.component';
import { Alumno } from '../../../interfaces/Alumno.Interface';
import { generateRandomId } from '../../../shared/utils';

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
  displayedColumns: string[] = ['nro', 'nombre', 'apellido', 'edad', 'aprobado', 'acciones'];
  dataSource = ELEMENT_DATA;

  constructor(private matDialog: MatDialog) {

  }

  openDialog() {
    this.matDialog.open(AlumnoDialogComponent).afterClosed().subscribe({
      next: (value) => {
        console.log('Recibimos el valor: ', value);
        if(value) {
          this.alumno = value;
          value[0] = generateRandomId(3);
          this.dataSource = [...this.dataSource, value];
        }
      }
    });
  }

  editAlumno(alumnoEdit: Alumno) {
    //enviando alumno
    this.matDialog.open(AlumnoDialogComponent, {data: alumnoEdit}).afterClosed().subscribe(({
      next: (value) => {
        if(!!value) {
          this.dataSource = this.dataSource.map((el) => el.id === alumnoEdit.id ? {...value, id: alumnoEdit.id} : el)
        }
      }
    }));
  }

  deleteAlumnoById(id: string | number) {
    if(confirm('Esta seguro de eliminar un alumno?')) {
      this.dataSource = this.dataSource.filter((el) => el.id != id);
    }
  }
}
