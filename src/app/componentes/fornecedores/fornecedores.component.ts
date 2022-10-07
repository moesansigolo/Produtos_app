import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  get f(): any{
    return this.form.controls;
  }

  ngOnInit(): void {
    this.validation();
  }

  private validation(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      sobreNome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      empresa: ['', Validators.required]

    })
  }

  public resetForm(event: any): any {
    event.preventDefault();
    this.form.reset();
  }

}
