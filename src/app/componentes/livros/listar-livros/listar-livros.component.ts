import {Component, OnInit} from '@angular/core';
import {BookVoList} from '../../../model/bookVoList';
import {LivroService} from '../../../services/livro.service';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  constructor(private service: LivroService) {
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

  scrollUpPage() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
