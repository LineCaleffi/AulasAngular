export interface PokemonInterface{
    nome: string,
    level: number,
    tipo: string,
    moveset: any[]
}

export class Pokemon implements PokemonInterface{
    nome: string = " ";
    level: number = 0;
    tipo: string = "Normal";
    moveset: string[] = [];
}
