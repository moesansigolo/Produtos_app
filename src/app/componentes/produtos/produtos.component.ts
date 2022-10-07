
import { ProdutoService } from '../../Services/produto.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Produto } from '../../models/Produto';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  public modalRef: any = BsModalRef;

  public produtos: Produto[] = [];
  public produtosFiltrados: Produto[] = [];
  public tamanhoImg: number = 50;
  public margemImg: number = 2;
  public exibirImagem: boolean = true;
  private _filtroLista: string = '';

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
    private spinner: NgxSpinnerService
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
      (response) => {
        this.produtos = response;
        this.produtosFiltrados = this.produtos;
      },
      (error) => {
        //this.spinner.hide();
        this.toastr.error('Erro ao carregar produtos', 'Erro!');
      }
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.toastr.success('Produto deletado com sucesso!', 'Deletado!');
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }
}
