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
  filtro = '';

  constructor(private service: PensamentoService) {}

  buscarPensamentos() {
    if(this.filtro.length > 1)
      this.carregarPensamentos(false);
  }

  carregarPensamentos(proxPag: boolean = true) {
    const pagina = proxPag ? ++this.paginaAtual : this.paginaAtual;
      this.service.listar(pagina, this.filtro).subscribe((listaPensamentos) => {
        pagina == 1 ? this.listaPensamentos = listaPensamentos.data : this.listaPensamentos.push(...listaPensamentos.data);
        if (this.paginaAtual === listaPensamentos.last) this.haMaisPensamentos = false;
      })
  }

  ngOnInit(): void {
    this.carregarPensamentos();
  }
}
