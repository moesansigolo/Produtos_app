import { ValidatorFild } from './../../../../../helpers/ValidatorFild';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  get f(): any{
    return this.form.controls;
  }

  ngOnInit(): void {
    this.validation();
  }

  private validation():void {

    const formOptions: AbstractControlOptions = {
      validators: ValidatorFild.MustMatch('senha', 'confirmeSenha')
    };

    this.form = this.fb.group({
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', Validators.required],
      usuario: ['', Validators.required],
      userName: ['', Validators.required],
      senha:  ['', Validators.required],
      confirmeSenha: ['', Validators.required],
    }, formOptions);
  }

}
