import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonInterface } from '../pokemon.interface';

@Component({
  selector: 'app-mostra-pokemon',
  template: `
  <ul>
      <li>{{ pokemon.nome}} </li>
      <li>{{ pokemon.tipo}} </li>
      <li>{{ pokemon.level}} </li>
      <li>{{ pokemon.moveset}} </li>
  </ul>
  `,
})
export class MostraPokemonComponent implements OnInit {
    @Input() public pokemon: PokemonInterface = new Pokemon;
    constructor() { }
    ngOnInit(): void {}
}
