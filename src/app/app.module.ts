import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {LoginComponent} from './componentes/login/login.component';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import {HttpInterceptorModule} from './services/header-interceptor.service';
import {PaginatorModule} from 'primeng/paginator';
import {ListarLivrosComponent} from './componentes/livros/listar-livros/listar-livros.component';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {IncluirEditarLivroComponent} from './componentes/incluir-editar/incluir-editar-livro/incluir-editar-livro.component';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {InputMaskModule} from 'primeng/inputmask';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListarLivrosComponent,
    IncluirEditarLivroComponent
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
    TableModule,
    PaginatorModule,
    DataViewModule,
    PanelModule,
    CurrencyMaskModule,
    InputMaskModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
