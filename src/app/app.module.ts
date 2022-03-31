import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceiroComponent } from './terceiro/terceiro.component';
import { NovoComponenteComponent } from './novo-componente/novo-componente.component';

import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { QuartoComponent } from './quarto/quarto.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { HpComponent } from './exercicioHP/hp.component';
@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent,
    TerceiroComponent,
    NovoComponenteComponent,
    ComponenteFilhoComponent,
    QuartoComponent,
    DiretivasComponent,
    HpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
