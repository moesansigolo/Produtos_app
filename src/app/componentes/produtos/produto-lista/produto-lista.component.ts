import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ProdutoService } from './../../../Services/produto.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Produto } from './../../../models/Produto';
import { Component, OnInit, TemplateRef } from '@angular/core';
//import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.scss']
})
export class ProdutoListaComponent implements OnInit {
  public modalRef: any = BsModalRef;

  public produtos: Produto[] = [];
  public produtosFiltrados: Produto[] = [];

  public tamanhoImg: number = 50;
  public margemImg: number = 2;
  public exibirImagem: boolean = true;
  private _filtroLista = '';
  public produtoId = 0 ;

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.produtosFiltrados = this.filtroLista
      ? this.filtrarProdutos(this.filtroLista)
      : this.produtos;
  }

  public filtrarProdutos(filtrarPor: string): Produto[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.produtos.filter(
      (p: any) =>
        p.nomeProduto.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || //filtrando por nome
        p.dataValidade.toLocaleLowerCase().indexOf(filtrarPor) !== -1 //filtrando por data validade
    );
  }

  constructor(
    private produtoService: ProdutoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private router: Router,
    //private spinner: NgxSpinnerService
    ) {}

  public ngOnInit(): void {
    this.getProdutos();
    //this.spinner.show()

  }

  public alterarImagem() {
    this.exibirImagem = !this.exibirImagem;
  }

  public getProdutos(): void {
    this.produtoService.getProdutos().subscribe(
      (produtos:Produto[]) => {
        this.produtos = produtos;
        this.produtosFiltrados = this.produtos;
      },
      (error) => {
        //this.spinner.hide();
        this.toastr.error('Erro ao carregar produtos', 'Erro!');
      }
    );
  }

  openModal(event: any, template: TemplateRef<any>, produtoId: number): void {
    event.stopPropagation();
    this.produtoId = produtoId;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef.hide();

    this.produtoService.deleteProduto(this.produtoId).subscribe(
        (result: any) => {
        if (result.message === 'Deletado'){
          this.toastr.success('Produto deletado com sucesso!', 'Deletado!');
          this.getProdutos();
        }
      },
      (error: any) => {
        console.error(error)
        this.toastr.error(`Erro ao tentar deletar o produto ${this.produtoId}`, 'Erro');
        //this.spinner.hide();
      },
      //() =>this.spinner.hide(),
    );
  }

  decline(): void {
    this.modalRef.hide();
  }

  detalheProduto(id: number): void {
    this.router.navigate([`produtos/cadastro/${id}`])
  }
}
