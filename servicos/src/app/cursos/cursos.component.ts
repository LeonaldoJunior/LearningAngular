import { Component, OnInit } from '@angular/core';

import { CursosServices } from './cursos.service'


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosServices]

})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  // cursosService: CursosServices;
  

  constructor(private cursosService: CursosServices) { 
    // this.cursosService = new CursosServices();
    // this.cursosService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    CursosServices.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    
    // this.cursosService.emitirCursoCriado.subscribe(
    //   curso => console.log(curso)
    );
  }
}
