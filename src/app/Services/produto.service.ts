import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  baseUrl = 'https://localhost:5001/api/Produto'

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

  public post(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produto);
  }

  public put(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.baseUrl}/${produto.id}`, produto);
  }

  public deleteProduto(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(take(1));
  }
}
