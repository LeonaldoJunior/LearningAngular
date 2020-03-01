import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosServices {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();


    private cursos: string[]=['Angular8', 'Java', 'Phonegap'];

    constructor(){
        console.log('CursosServices');
    }


    getCursos = () => {return  this.cursos};
    addCurso = (curso: string) => {
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosServices.criouNovoCurso.emit(curso);
    };
}
