import { Component, Input } from '@angular/core';
import { IPensamento } from '../IPensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})

export class PensamentoComponent {
  @Input() pensamento: IPensamento = {
    id: 0,
    conteudo: 'massa isso aqui',
    autoria: 'Sou Yo',
    modelo: 'modelo3'
  }

  constructor() {}

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
