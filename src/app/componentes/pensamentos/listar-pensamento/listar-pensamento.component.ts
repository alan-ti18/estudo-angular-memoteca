import { PensamentoService } from './../pensamento.service';
import { Component } from '@angular/core';
import { IPensamento } from '../IPensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {
  
  listaPensamentos: IPensamento[] = []
  paginaAtual = 0;
  haMaisPensamentos = true;

  constructor(private service: PensamentoService) {}

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos.data);
      if (this.paginaAtual === listaPensamentos.last) this.haMaisPensamentos = false;
    })
  }

  ngOnInit(): void {
    this.carregarMaisPensamentos();
  }
}
