import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from '../../../../../interfaces/Alumno.Interface';

@Component({
  selector: 'app-alumno-dialog',
  templateUrl: './alumno-dialog.component.html',
  styleUrl: './alumno-dialog.component.scss'
})
export class AlumnoDialogComponent {
  alumnoForm: FormGroup;

  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<AlumnoDialogComponent>, @Inject(MAT_DIALOG_DATA) public editingAlumno?: Alumno) {
    this.alumnoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      Apellido: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      estaAprobado: [true, [Validators.required]]
    });

    if(this.editingAlumno) {
      this.alumnoForm.patchValue(this.editingAlumno);
    }
  }

  onSave(): void {
    console.log(this.alumnoForm.value);
    this.matDialogRef.close(this.alumnoForm.value);
  }
}
