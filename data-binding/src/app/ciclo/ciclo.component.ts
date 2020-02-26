import { 
  Component,
   OnInit,
   OnChanges, 
   DoCheck, 
   AfterContentInit, 
   AfterViewInit, 
   AfterViewChecked, 
   OnDestroy,
   AfterContentChecked,
   Input
  } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterViewInit, AfterViewChecked, OnDestroy, AfterContentChecked {

  @Input() valorInicial: number = 10;

  constructor() { 
    this.log('Construtor');
  }

  ngOnChanges(){
    this.log('NgOnChanges')
  }

  ngOnInit(){
    this.log('NgOnIniti')
  }

  ngDoCheck(){
    this.log('ngDoCheck')
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit')
  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked')
  }
  
  ngAfterViewInit(){
    this.log('ngAfterViewInit')
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked')
  }

  ngOnDestroy(){
    this.log('ngOnDestroy')
  }

  private log(hook: string){
    console.log(hook);
  }

}
