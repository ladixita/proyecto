import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasePipesRoutingModule } from './clase-pipes-routing.module';
import { ClasePipesComponent } from './clase-pipes.component';


@NgModule({
  declarations: [
    ClasePipesComponent
  ],
  imports: [
    CommonModule,
    ClasePipesRoutingModule
  ]
})
export class ClasePipesModule { }
