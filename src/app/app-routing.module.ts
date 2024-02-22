import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './componentes/login/login.component';
import {ListarLivrosComponent} from './componentes/livros/listar-livros/listar-livros.component';

const routes: Routes = [
  {
    path: 'listar', component: ListarLivrosComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
