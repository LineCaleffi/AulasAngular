import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceiroComponent } from './terceiro/terceiro.component';
import { NovoComponenteComponent } from './novo-componente/novo-componente.component';

import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { QuartoComponent } from './quarto/quarto.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent,
    TerceiroComponent,
    NovoComponenteComponent,
    ComponenteFilhoComponent,
    QuartoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
