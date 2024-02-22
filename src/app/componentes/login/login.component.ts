import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    username: '',
    password: ''
  };

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  logar() {
    this.loginService.login(this.usuario);
  }

}
