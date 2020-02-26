import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ['Angular8']
  mostrarCursos: boolean = false;
  constructor() { }



  onMostrarCursos = () => this.mostrarCursos = !this.mostrarCursos;
  // onMostrarCursos(){
  //   this.mostrarCursos = !this.mostrarCursos;
  // }

  ngOnInit() {
  }

}
