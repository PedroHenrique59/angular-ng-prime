import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './componentes/login/login.component';
import {ListarLivrosComponent} from './componentes/livros/listar-livros/listar-livros.component';
import {IncluirEditarLivroComponent} from './componentes/incluir-editar/incluir-editar-livro/incluir-editar-livro.component';

const routes: Routes = [
  {
    path: 'listar', component: ListarLivrosComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'incluirEditar/:id', component: IncluirEditarLivroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
