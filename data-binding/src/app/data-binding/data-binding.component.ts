import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
 
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = '';
  valorSalvo;
  isMouseOver = false;


  getValor(){
    return 1;
  } 
  getCurtirCurso = () => true;
  constructor() { }

  botaoClicado = () => alert("Voce clicou");
  unKeyUp = evento => this.valorAtual = evento.target.value;
  salvarValor = valor => this.valorSalvo = valor;
  onMouseOverOut = () => this.isMouseOver = !this.isMouseOver; 
  ngOnInit() {
  }

}
