import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPensamento, IPensamentoPaginado } from './IPensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API = 'http://localhost:3010/pensamentos'

  constructor(private http: HttpClient) {}

  listar(pagina: number): Observable<IPensamentoPaginado> {
    const itensPorPagina = 6;
    let params = new HttpParams()
      .set('_page', pagina)
      .set('_per_page', itensPorPagina)
    return this.http.get<IPensamentoPaginado>(this.API, { params });
  }

  criar(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.post<IPensamento>(this.API, pensamento);
  }

  editar(pensamento: IPensamento): Observable<IPensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<IPensamento>(url, pensamento)
  }

  excluir(pensamentoId: number): Observable<IPensamento> {
    const url = `${this.API}/${pensamentoId}`;
    return this.http.delete<IPensamento>(url);
  }

  buscarPorId(pensamentoId: number): Observable<IPensamento> {
    const url = `${this.API}/${pensamentoId}`;
    return this.http.get<IPensamento>(url);
  }
}
