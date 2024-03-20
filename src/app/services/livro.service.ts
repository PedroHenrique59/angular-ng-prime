import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ConstantesUrl} from '../constantesUrl';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient) {
  }

  listarTodos(currentPage?: string): Observable<any> {
    const parametros = new HttpParams()
      .set('size', '6')
      .set('page', currentPage === undefined ? '0' : currentPage);

    return this.http.get<any>(ConstantesUrl.baseUrlBook, {
      params: parametros
    });
  }

  obterPorId(id): Observable<any> {
    return this.http.get<any>(ConstantesUrl.baseUrlBook + '/' + id);
  }

}
