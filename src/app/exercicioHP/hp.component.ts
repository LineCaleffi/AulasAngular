// ngSwtich -> é uma diretiva que exibe um elemento de um possivel conjunto de elementos com base em alguma condição
// ngIf -> é uma diretiva Angular que permite alterar a página a partir de uma declaração condicional

import { Component, OnInit } from '@angular/core';
import { HarryPotterInterface } from '../hp.interface';

@Component({
    selector: 'app-hp',
  template: `                                         
    <!-- REALIZANDO A ATIVIDADE -->
    <h1>ATIVIDADE</h1>
    <input type="number"   #campoNumero  (input)="numMax = +campoNumero.value - 1" [value]="hp.length"    [max]="hp.length"  min="0" />
    <ul>
      <div *ngFor="let hp of hp; index as indice">
        <li *ngIf="indice <= numMax">
          <p>
            {{ hp.nome }}, casa: {{ hp.casa }}, patronon: {{ hp.patronon }}, animal de estimação: {{ hp.animalEstimacao }}, aulas: {{ hp.aulas }}
          </p>
        </li>
      </div>
    </ul>
  `,
})
export class HpComponent {
// 1 -> Criem um vetor de objetos, sendo que os objetos desse vetor simbolizam algo que você gosta (OK)
// 2 -> Criem uma interface para tipar esse array de objetos (OK)
// 3 -> Criem uma diretiva ngFor no template que liste cada propriedade desses objetos (OK)
// 4 -> DESAFIO Criem um Input number que o usu+ario escolhe o número máximo de objetos na tela
    public numMax: number;
    public hp : HarryPotterInterface[];
    
    constructor() {
        this.hp = [
        {
            nome: "Harry Potter",
            casa: "Grifinória",
            patronon: "Cervo",
            animalEstimacao: ["Coruja", " Edwiges"],
            aulas: ["Feitiços", " Poções", " Herbologia", " Transfiguração"]
        },
        {
            nome: "Hermione Granger",
            casa: "Grifinória",
            patronon: "Lontra",
            animalEstimacao: ["Gato", " Bichento"],
            aulas: ["Feitiços", " Poções", " Herbologia", " Aritmancia", " Transfiguração"]
        },
        {
            nome: "Gina Weasley",
            casa: "Grifinória",
            patronon: "Cavalo",
            animalEstimacao: ["Mini pufe", " Arnaldo"],
            aulas: ["Feitiços", " Poções", " Transfiguração"]
        },
        {
            nome: "Severo Snape",
            casa: "Sonserina",
            patronon: "Corça",
            animalEstimacao: ["não sei hahah", " não sei hahah"],
            aulas: [" Poções"]
        },
        {
            nome: "Draco Malfoy",
            casa: "Sonserina",
            patronon: "sei lá",
            animalEstimacao: ["não sei hahah", " não sei hahah"],
            aulas: ["Feitiços", " Poções", " Herbologia", " Transfiguração"]
        },
        {
            nome: "Minerva McGonagall",
            casa: "Grifinória",
            patronon: "Gato",
            animalEstimacao: ["Gato", " Felix"],
            aulas: ["Transfiguração"]
        }
    ];
    this.numMax = this.hp.length;
    }
}



