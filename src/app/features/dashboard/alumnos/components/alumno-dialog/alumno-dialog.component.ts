import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alumno-dialog',
  templateUrl: './alumno-dialog.component.html',
  styleUrl: './alumno-dialog.component.scss'
})
export class AlumnoDialogComponent {
  alumnoForm: FormGroup;

  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<AlumnoDialogComponent>) {
    this.alumnoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      aprobado: [true, [Validators.required]]
    });
  }

  onSave(): void {
    console.log(this.alumnoForm.value);
    this.matDialogRef.close(this.alumnoForm.value);
  }
}
