import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  baseUrl = 'https://localhost:5001/api/produto'

  constructor(private http: HttpClient) { }

  public getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.baseUrl);
  }

  public getProdutoByNome(nome: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.baseUrl}/${nome}/nome`);
  }

  public getProdutoById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}/${id}`);
  }
}
