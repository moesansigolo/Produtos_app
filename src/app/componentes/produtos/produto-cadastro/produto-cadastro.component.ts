import { ToastrService } from 'ngx-toastr';
import { Produto } from '../../../models/Produto';
import { ProdutoService } from '../../../Services/produto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.scss']
})
export class ProdutoCadastroComponent implements OnInit {
  produto = {} as Produto;
  form: any = FormGroup;
  estadoSalvar = 'post';

  get f(): any {
    return this.form.controls;
  }

  get bsConfig(): any {
    return {
      adaptivePosition: true,
      dateInputFormat: 'DD/MM/YYYY hh:mm a',
      containerClass: 'theme-default',
      showWeekNumbers: false
    };
  }
  constructor(private fb: FormBuilder,
    private localeService: BsLocaleService,
    private router: ActivatedRoute,
    private produtoService: ProdutoService,
    private toastr: ToastrService)
    {
    this.localeService.use('pt-br');
  }

  public carregarProduto(): void {
    const produtoIdParam = this.router.snapshot.paramMap.get('id');
    if(produtoIdParam !== null){
      this.estadoSalvar = 'put';
      this.produtoService.getProdutoById(+produtoIdParam).subscribe(
        (produto: Produto) => {
          this.produto = {...produto}; //Object.assign({}, produto);mesma coisa que {...produto}
          this.form.patchValue(this.produto);
        },
        (error: any) => {
          this.toastr.error('Erro ao tentar carregar produto', 'Erro');
          console.error(error);
        },
        //() => {},
      );
    }
  }

  ngOnInit(): void {
    this.carregarProduto()
    this.validation();
  }

  public validation(): void{
    this.form = this.fb.group({
      nomeProduto: ['', Validators.required],
      qntUnitaria: ['', Validators.required],
      preco: ['', Validators.required],
      peso: ['', Validators.required],
      dataInclusao: ['', Validators.required],
      dataValidade: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  public resetForm(): void{
    this.form.reset();
  }

  public salvarProduto(): void {
    if ( this.form.valid) {
      if (this.estadoSalvar === 'post'){
        this.produto = { ...this.form.value};
        this.produtoService['post'](this.produto).subscribe(
          () => this.toastr.success('Produto salvo com sucesso', 'Sucesso'),
          (error: any) => {
            console.error(error);
            this.toastr.error('Erro ao salvar o produto', 'Erro');
          },
        );
      } else {
          this.produto = {id: this.produto.id, ...this.form.value};
          this.produtoService['put'](this.produto).subscribe(
            () => this.toastr.success('Produto atualizado com sucesso!', 'Sucesso'),
            (error: any) => {
              console.error(error);
              this.toastr.error('Erro ao atualizar produto', 'Erro')
            }
          )
        }
    }
  }

}
