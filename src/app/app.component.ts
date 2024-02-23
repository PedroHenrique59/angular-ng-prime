import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: MenuItem[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
    }
    this.items = [
      {
        label: 'Gerenciar Livro',
        icon: 'pi pi-user',
        items: [
          {
          label: 'Listar',
          icon: 'pi pi-fw pi-plus',
          routerLink: '/listar'
          },
          {
            label: 'Cadastrar',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/'
          },
        ]
      }
    ];
  }

  logout() {
    if (localStorage.getItem('token') != null) {
      localStorage.removeItem('token');
    }
  }

  esconderMenu(): boolean {
    return localStorage.getItem('token') == null;
  }

}
