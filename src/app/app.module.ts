import { ProdutoCadastroComponent } from './componentes/produtos/produto-cadastro/produto-cadastro.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';

import { DateTimeFormatPipe } from './../../helpers/DateTimeFormat.pipe';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { FornecedoresComponent } from './componentes/fornecedores/fornecedores.component';
import { NavComponent } from './shared/nav/nav.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ContatosComponent } from './componentes/contatos/contatos.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { ProdutoListaComponent } from './componentes/produtos/produto-lista/produto-lista.component';
import { UsersComponent } from './componentes/users/users.component';
import { LoginComponent } from './componentes/users/login/login.component';
import { RegistrarComponent } from './componentes/users/registrar/registrar.component';


defineLocale('pt-br', ptBrLocale);
@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ProdutoCadastroComponent,
    FornecedoresComponent,
    NavComponent,
    DateTimeFormatPipe,
    ContatosComponent,
    DashboardComponent,
    TituloComponent,
    ProdutoListaComponent,
    UsersComponent,
    LoginComponent,
    RegistrarComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true
    }),
    NgxSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
