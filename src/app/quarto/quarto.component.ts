import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarto',
  template: `
      <input type="text" #campoSenha placeholder="Digite sua senha...."/><br /><br />
      <input type="text" #campoVerificaSenha (blur)="verificadorDeSenha(campoSenha.value , campoVerificaSenha.value)" placeholder="Confirme sua senha...."/>
      <div> {{textoSenha}}</div>
  `,
  styleUrls: ['./quarto.component.css']
})
export class QuartoComponent {
 public textoSenha: string = '';

  public verificadorDeSenha(senha:String, verificaSenha: String): void{
    console.log(`${senha} ${verificaSenha}`);
    if(senha !== verificaSenha){
      this.textoSenha = "Senhas devem ser iguais"
    }else this.textoSenha = "Senhas são iguais";
  }

}

// O evento blur é acionado quando um elemento perde foco
