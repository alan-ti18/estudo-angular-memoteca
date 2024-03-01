import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { IPensamento } from '../IPensamento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent {

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute) {}

  pensamento: IPensamento = {
    id: '0',
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  excluirPensamento() {
    if(this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(id!).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }
}
