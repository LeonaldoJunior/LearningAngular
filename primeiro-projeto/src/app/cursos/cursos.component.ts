import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
  nomePortal: string; 
  cursos: string[];
 
  
  constructor(private cursosService: CursosService) { // No angular a injeção de dependência é sempre via construtor
    this.nomePortal = 'http://loiane.training';
    this.cursos = this.cursosService.getCursos();

    //var servico = new CursosService(); //com a injecao de dependencia vc n precisa instanciar manualmente a classe de serviço

   }

  

  ngOnInit() {
  }

}
