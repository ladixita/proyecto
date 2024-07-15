import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-alumno-form',
  templateUrl: './create-alumno-form.component.html',
  styleUrl: './create-alumno-form.component.scss'
})
export class CreateAlumnoFormComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombres: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      edad: ['', [Validators.required]],
    });
  }

  get nombresControl() {
    return this.registerForm.get('nombres');
  }

  get edadControl() {
    return this.registerForm.get('edad');
  }

  get nombresControlInvalid() {
    return (
      this.nombresControl?.invalid && this.nombresControl?.touched && this.nombresControl?.dirty
    );
  }

  sendForm(): void {
    if (this.registerForm.invalid) {
      alert('Formulario no válido');
      return;
    }
    console.log(this.registerForm.value);
  }
}
