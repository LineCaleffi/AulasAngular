import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-component',
  template: `
  <input type="text" [disabled]="isDisable" />
  <button type="button" (click)="isDisable = !isDisable">CLIQUE EM MIM</button>{{isDisable ? ' Habilitar' : ' Desabilitar'}}
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
export class NovoComponenteComponent {
  public isDisable: boolean = false;
}
