import {Component, OnInit} from '@angular/core';
import {Login} from '../../model/login';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {login: '', senha: ''};

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  logar() {
    this.loginService.login(this.usuario);
  }

}
