import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { AlumnoDialogComponent } from './components/alumno-dialog/alumno-dialog.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { SharedModule } from '../../../shared/shared.module';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnoDialogComponent
  ],
  exports: [AlumnosComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    SharedModule,
    MatTableModule
  ]
})
export class AlumnosModule { }
