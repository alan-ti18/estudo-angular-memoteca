import { Component, Input } from '@angular/core';
import { IPensamento } from '../IPensamento';
import { PensamentoService } from '../pensamento.service';

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
    modelo: 'modelo3',
    favorito: false
  }

  constructor(private service: PensamentoService) {}

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string {
    return this.pensamento.favorito ? 'ativo' : 'inativo';
  }

  toggleFavorito(pensamento: IPensamento): void {
    this.service.mudarFavorito(pensamento).subscribe();
  }
}
