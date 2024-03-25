import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LivroService} from '../../../services/livro.service';
import {Book} from '../../../model/book';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-incluir-editar-livro',
  templateUrl: './incluir-editar-livro.component.html',
  styleUrls: ['./incluir-editar-livro.component.css']
})
export class IncluirEditarLivroComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private router: Router, private service: LivroService) {
  }

  livro = new Book();

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    const datePipe = new DatePipe('pt-BR');
    this.service.obterPorId(id).subscribe(livro => {
      this.livro = livro;
      this.livro.launchDate = datePipe.transform(this.livro.launchDate, 'dd/MM/yyyy');
    });
  }

  voltar() {
    this.router.navigate(['/listar']);
  }

  salvar() {
    alert(JSON.stringify(this.livro));
  }

}
