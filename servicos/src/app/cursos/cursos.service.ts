import { Injectable } from '@angular/core';

@Injectable()
export class CursosServices {

    private cursos: string[]=['Angular8', 'Java', 'Phonegap'];

    constructor(){
        console.log('CursosServices');
    }


    getCursos = () => {return  this.cursos};
    addCurso = (curso: string) => this.cursos.push(curso);
}
