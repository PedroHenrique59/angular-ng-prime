import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {ListarUsuarioComponent} from './componentes/listar-usuario/listar-usuario.component';
import {LoginComponent} from './componentes/login/login.component';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import {HttpInterceptorModule} from './services/header-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpInterceptorModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    MenubarModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
