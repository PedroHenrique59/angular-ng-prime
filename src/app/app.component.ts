import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Gerenciar Usuário',
        icon: 'pi pi-user',
        items: [{
          label: 'Cadastrar',
          icon: 'pi pi-fw pi-plus',
          routerLink: '/listar'
        }
        ]
      }
    ];
  }

}
