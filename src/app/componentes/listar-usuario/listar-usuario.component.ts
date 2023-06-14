import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../model/usuario';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) {
  }

  listaUsuarios: Array<Usuario> = [];

  cols: any[];

  ngOnInit() {
    this.cols = [
      {field: 'nome', header: 'Nome'},
      {field: 'cpf', header: 'CPF'}
    ];
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.listarTodos().subscribe(retorno => {
      this.listaUsuarios = retorno.content;
    });
  }

}
