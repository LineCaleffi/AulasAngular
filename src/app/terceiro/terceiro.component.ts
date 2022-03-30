import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-terceiro',
  template: `
  <h2 [class]="parOuImpar">{{getContador()}}</h2>
 <!-- <h2 [class.sucesso]="isSucesso"> SAIDA </h2>
  <p [style.color]="cor"> binding de estilos </p>
  <input type="text" value="{{texto}}" [disabled]="isDisable" /> -->
  <button type="button" (click)="cliqueBotao()">INCREMENTO</button>
  `,

  styles:[
    `
      .par{
        color: red;
      }
      .impar{
        color: green;
      }
    `,
  ],
})

export class TerceiroComponent {
  // public parOuImpar: boolean = true;
  // public isSucesso: boolean = true;
  // public isDisable: boolean = true;
  // public texto: string = "Digite algo . . ."

  public parOuImpar: string = 'par';
  private contador: number = 0;
  public cliqueBotao(){
    // this.isSucesso = !this.isSucesso; // muda a cor da variavel isSucesso
    console.log("BOTAO CLICADO " + ++this.contador);  // mostra no console do navergador
    if(this.contador % 2 == 0) {
      console.log("par");
      this.parOuImpar = "par"; // após apertar o botão o número que for par fica vermelho
    } else {
      console.log("impar");
      this.parOuImpar = "impar"; // após apertar o botão o número que for impar fica verde
    }
  }
  public getContador(){
   return this.contador;
  }

}
