import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LivroService} from '../../../services/livro.service';
import {Book} from '../../../model/book';

@Component({
  selector: 'app-incluir-editar-livro',
  templateUrl: './incluir-editar-livro.component.html',
  styleUrls: ['./incluir-editar-livro.component.css']
})
export class IncluirEditarLivroComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private service: LivroService) { }

  livro: Book;
  livroUpdate = new Book();

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.service.obterPorId(id).subscribe(livro => {
      this.livro = livro;
    });
  }

}
