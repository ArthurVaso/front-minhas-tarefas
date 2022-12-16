import { Usuario } from 'src/app/types/Usuario';
import { ToastService } from './../../material-components/services/toast/toast.service';
import { Router } from '@angular/router';
import { AuthService } from './../../security/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})

export class CadastroUsuarioComponent implements OnInit {

  public mostrarDadosPessoais = true;

  public subTitle = 'Dados Pessoais';

  public name: string = '';

  public surname: string = '';

  public email: string = '';

  public password: string = '';

  public date = new Date();

  public select = '-1';

  public sourceSelect = [
    { Codigo: '0', Descricao: 'teste1' },
    { Codigo: '1', Descricao: 'teste2' },
    { Codigo: '2', Descricao: 'teste3' },
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
  }

  onClickButtonCadastrar() {

    if (!this.name) {
      this.toastService.openErrorToast('O nome é obrigatório!');

      console.log("O nome é obrigatório!");
      return;
    }

    if (!this.surname) {
      this.toastService.openErrorToast('O sobrenome é obrigatório!');

      return;
    }

    if (!this.email) {
      this.toastService.openErrorToast('O email é obrigatório!');

      return;
    }

    const padraoEmail = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);

    if (!padraoEmail.test(this.email)) {
      this.toastService.openErrorToast('Email inválido!');
      return;
    }

    if (!this.password) {
      this.toastService.openErrorToast('A senha é obrigatória!');

      return;
    }

    var usuarioCadastro: Usuario = {
      nome: this.name,
      sobrenome: this.surname,
      email: this.email,
      senha: this.password,
    };

    this.authService.signUp(usuarioCadastro).subscribe({
      next: () => {
        this.router.navigate(['/listar-tarefa']);
      },
      error: err => {
        this.toastService.openErrorToast(err.error.message);
      }
    });

  }

}
