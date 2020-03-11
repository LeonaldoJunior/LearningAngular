import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: "Learning JavaScript Data structures and Algotithms 2nd Edition",
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  }

  livros: string[] = ['Java', 'Angular 2']
  filtro: string = '';

  addCurso(valor){
    this.livros.push(valor);
    console.log(this.livros)
  }

  obterCursos(){
    if(this.livro.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }
    return this.livros.filter((v) => {
      if(v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0 ) {
        return true;
      }
      return false;
    });
  }
  
  valorAsync = new Promise((resolve,reject) => {
    setTimeout(() => resolve('Valor Assincrono'), 2000)
  })

   valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));
  // valorAsync2 = Observable.interval(2000).map(valor => 'Valor assincrono 2')


  constructor() {
   }

  ngOnInit() {
  }

}
