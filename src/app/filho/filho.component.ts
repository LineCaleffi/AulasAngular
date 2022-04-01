import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: []
})
export class FilhoComponent {
    @Input() mensagem: string ="";
}
