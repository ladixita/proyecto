import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { ClaseComponent } from './components/clase/clase.component';
import { CursoComponent } from './components/curso/curso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAlumnoFormComponent } from './components/alumno/create-alumno-form/create-alumno-form.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { AuthModule } from './features/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    ClaseComponent,
    CursoComponent,
    CreateAlumnoFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    AuthModule,
    DashboardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
