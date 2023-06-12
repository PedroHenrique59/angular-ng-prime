import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { ListarUsuarioComponent } from './componentes/listar-usuario/listar-usuario.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuarioComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        InputTextModule,
        FormsModule,
        ButtonModule,
        MenubarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
