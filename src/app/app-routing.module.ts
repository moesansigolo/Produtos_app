import { RegistrarComponent } from './componentes/users/registrar/registrar.component';
import { LoginComponent } from './componentes/users/login/login.component';
import { UsersComponent } from './componentes/users/users.component';
import { ProdutoListaComponent } from './componentes/produtos/produto-lista/produto-lista.component';
import { ContatosComponent } from './componentes/contatos/contatos.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedoresComponent } from './componentes/fornecedores/fornecedores.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { ProdutoDetalheComponent } from './componentes/produtos/produto-detalhe/produto-detalhe.component';

const routes: Routes = [
  {
    path: 'user', component: UsersComponent,
    children:[
      { path: 'login', component: LoginComponent},
      { path: 'registrar', component: RegistrarComponent}
    ]
  },
  { path: 'produtos', redirectTo: 'produtos/lista'},
  {
    path: 'produtos', component: ProdutosComponent,
    children: [
      { path: 'detalhe/:id', component: ProdutoDetalheComponent },
      { path: 'detalhe', component: ProdutoDetalheComponent },
      { path: 'lista', component: ProdutoListaComponent }
    ]
  },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'fornecedores', component: FornecedoresComponent},
  { path: 'contatos', component: ContatosComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
