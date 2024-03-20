import {Component, OnInit} from '@angular/core';
import {BookVoList} from '../../../model/bookVoList';
import {LivroService} from '../../../services/livro.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  constructor(private service: LivroService, private route: Router) {
  }

  listaLivros: BookVoList[];
  totalElementos: number;

  ngOnInit() {
    this.service.listarTodos().subscribe(livro => {
      this.listaLivros = livro._embedded.bookVOList;
      this.totalElementos = livro.page.totalElements;
    });
  }

  paginate(event) {
    this.service.listarTodos(event.page).subscribe(livro => {
      this.listaLivros = livro._embedded.bookVOList;
      this.totalElementos = livro.page.totalElements;
    });
    this.scrollUpPage();
  }

  editar(id) {
    this.route.navigate(['/incluirEditar', id]);
  }

  scrollUpPage() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
