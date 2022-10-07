import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {

  form: any = FormGroup;

  get f(): any {
    return this.form.controls;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validation()
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

}
