import { BrowserModule } from '@angular/platform-browser'; //Prepara a aplicação para ser rodada em um browser
import { NgModule } from '@angular/core';


//Imports das classes dos nossos projetos
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component' 
import { CursosModule } from './cursos/cursos.module'

@NgModule({
  declarations: [ //Metadado: aqui será listado todos os componentes, diretivas e pipes que serão utilizados
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [  //Metadado: os importes que serão usados nesse módulo, ou em qualquer outro módulo do declaration
    BrowserModule,
    CursosModule
  ],
  providers: [],//Metadado: aqui serão declarados todos os serviços que ficaram disponíveis para os componentes
  bootstrap: [AppComponent] //Apenas no módupo de raiz
})
export class AppModule { }
