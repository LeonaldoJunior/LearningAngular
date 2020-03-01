import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosServices } from '../cursos/cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  // providers: [
  //   CursosServices
  // ],
  exports:[
    CursosComponent
  ]
})
export class CursoModule { }
