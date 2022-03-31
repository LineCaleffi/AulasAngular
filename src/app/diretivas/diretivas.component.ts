// ngSwtich -> é uma diretiva que exibe um elemento de um possivel conjunto de elementos com base em alguma condição
// ngIf -> é uma diretiva Angular que permite alterar a página a partir de uma declaração condicional

import { Component, OnInit } from '@angular/core';
import { HarryPotterInterface } from '../hp.interface';
import { PokemonInterface } from '../pokemon.interface';

@Component({
    selector: 'app-diretivas',
  template: `
    <h2 *ngIf="aparece">esse texto pode aparecer ou não</h2> <!--  Aparece o texto ou não após clicar no botão   -->
    <button (click)="aparece = !aparece">
      {{ aparece ? 'OCULTAR O TEXTO' : 'MOSTRAR O TEXTO' }} <!--Se o botão estiver escrito 'ocultar texto' ao clicar o texto some, após o botão muda pra 'mostrar' -->
    </button>                                               <!-- ao clicar no botão o texto aparece novamente -->
    <div [ngSwitch]="estacao">
      <div *ngSwitchCase="'verao'">Verão</div>
      <div *ngSwitchCase="'outono'">Outuno</div>
      <div *ngSwitchCase="'inverno'">Inverno</div>
      <div *ngSwitchCase="'primavera'">Primavera</div>
    </div>
    <ul>
      <li *ngFor="let pokemon of pokemons; odd as jeremias">
        <p [style.color]="jeremias? 'green' : 'red'">
          {{ pokemon.nome }}, {{ pokemon.tipo }}
        </p>
      </li>
    </ul>
    <h1> Fazendo outro método </h1>

    <input  type="number"    #campoNumero    (input)="numMaxPokemons = +campoNumero.value - 1"    [value]="pokemons2.length"    [max]="pokemons2.length"  min="0"    />

    <ul>
      <div *ngFor="let pokemons2 of pokemons2; index as indice">
        <li *ngIf="indice <= numMaxPokemons">
          <p>
            <app-mostra-pokemon [pokemon]="pokemons2"></app-mostra-pokemon>
          </p>
        </li>
      </div>
    </ul>
  `,
})
export class DiretivasComponent {
    public pokemons: PokemonInterface[] = [
        {
        nome: 'Alakazam',
        level: 10,
        tipo: 'psiquico',
        moveset: ['psych', 'confusion ray'],
        },
        {
        nome: 'raichu',
        tipo: 'eletrico',
        level: 20,
        moveset: ['thunder', 'tail whip', 'thunder wave'],
        },
        {
        nome: 'Psyduck',
        tipo: 'Aquático/Psiquico',
        level: 12,
        moveset: ['tackle', 'confusion ray'],
        },
        {
        nome: 'venossaur',
        tipo: 'Grama',
        level: 42,
        moveset: ['razor leaf'],
        },
        {
        nome: 'vulpix',
        tipo: 'fogo',
        level: 23,
        moveset: ['ember', 'tail whip', 'tackle'],
        },
    ];
    public estacao: string = 'outono';
    public aparece: boolean = true; // mostra verdadeiro ou falso


// -----------------------------------OUTRO MODO DE FAZER --------------------------------------------
  public numMaxPokemons: number;
  public pokemons2: PokemonInterface[]; // atrela "pokenos2" a interface "PokemonInterface"

  constructor() {
    this.pokemons2 = [
      {
        nome: 'Alakazam',
        level: 10,
        tipo: 'Normal',
        moveset: ['psych', 'confusion ray'],
      },
      {
        nome: 'raichu',
        tipo: 'Normal',
        level: 20,
        moveset: ['thunder', 'tail whip', 'thunder wave'],
      },
      {
        nome: 'Psyduck',
        tipo: 'Normal',
        level: 12,
        moveset: ['tackle', 'confusion ray'],
      },
      {
        nome: 'venossaur',
        tipo: 'Normal',
        level: 42,
        moveset: ['razor leaf'],
      },
      {
        nome: 'vulpix',
        tipo: 'Normal',
        level: 23,
        moveset: ['ember', 'tail whip', 'tackle'],
      },
      {
        nome: 'pikachu',
        level: 72,
        tipo: 'Normal',
        moveset: ['thunder', 'tail whip', 'tackle'],
      },
    ];
    this.numMaxPokemons = this.pokemons.length; // retorna o número máximo do array
  }
}



