import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoPipePipe } from './pipes/alumno-pipe.pipe';



@NgModule({
  declarations: [
    AlumnoPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [AlumnoPipePipe]
})
export class SharedModule { }
