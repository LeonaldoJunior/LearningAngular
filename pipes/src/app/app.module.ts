import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import {registerLocaleData} from '@angular/common';
import br from '@angular/common/locales/pt';
registerLocaleData(br, 'pt-BR');


import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';


@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SettingsService, 
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService) => settingsService.getLocale()
    }
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
