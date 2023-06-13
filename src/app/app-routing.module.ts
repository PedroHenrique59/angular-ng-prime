import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListarUsuarioComponent} from './componentes/listar-usuario/listar-usuario.component';
import {LoginComponent} from './componentes/login/login.component';

const routes: Routes = [
  {
    path: 'listar', component: ListarUsuarioComponent
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
