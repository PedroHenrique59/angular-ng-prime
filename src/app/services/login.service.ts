import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ConstantesUrl} from '../constantesUrl';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) {
  }

  login(usuario) {
    return this.http.post(ConstantesUrl.baseLogin, JSON.stringify(usuario)).subscribe(data => {
        /*Retorno HTTP*/

        const token = (JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1]);

        localStorage.setItem('token', token);

        this.router.navigate(['/']);
      },
      error => {
        console.error('Erro ao gerar o token de login');
        alert('Acesso Negado');
      });
  }

}
