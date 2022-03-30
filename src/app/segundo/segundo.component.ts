import { Component } from "@angular/core";

@Component({
  selector: 'app-segundo',
  template: `
    <div> {{preco + 1 }}</div>
    <div> {{preco - 1 }}</div>
    <div> {{preco }}</div>
    <div> {{getPreco() }}</div>
  `,
})

export class SegundoComponent{
  public user: {id: number; nome: string} = {
    id: 3012,
    nome: 'Aline'
  };
  public preco: number =10;

  getPreco(): string{
  return `R$ ${this.preco}`
  }
}
