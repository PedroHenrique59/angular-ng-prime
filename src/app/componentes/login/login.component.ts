import {Component, OnInit} from '@angular/core';
import {Login} from '../../model/login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  logar() {
    localStorage.setItem('token', 'token');
    this.route.navigate(['/']);
  }

}
