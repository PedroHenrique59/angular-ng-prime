import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantesUrl} from '../constantesUrl';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {
  }

  listarTodos(): Observable<any> {
    return this.http.get<any>(ConstantesUrl.baseLogin);
  }

  getStudentListPage(pagina): Observable<any> {
    return this.http.get<any>(ConstantesUrl.baseLogin + 'page/' + pagina);
  }

}
