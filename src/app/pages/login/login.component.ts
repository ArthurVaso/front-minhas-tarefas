import { Usuario } from './../../types/Usuario';
import { ToastService } from './../../material-components/services/toast/toast.service';
import { Router } from '@angular/router';
import { AuthService } from './../../security/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string = '';

  public password: string = '';

  public date = new Date();

  public select = '-1';

  public sourceSelect = [
    {Codigo: '0', Descricao: 'teste1'},
    {Codigo: '1', Descricao: 'teste2'},
    {Codigo: '2', Descricao: 'teste3'},
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
  }

  onClickButtonLogin() {

    if(!this.email) {
      this.toastService.openErrorToast('O email é obrigatório!');

      return;
    }

    const padraoEmail = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);

    if(!padraoEmail.test(this.email)) {
      this.toastService.openErrorToast('Email inválido!');
      return;
    }

    if(!this.password) {
      this.toastService.openErrorToast('A senha é obrigatória!');

      return;
    }

    const usuarioLogin: Usuario = {
      email: this.email,
      senha: this.password
    }

    this.authService.login(usuarioLogin).subscribe({
      next: () => {
        this.router.navigate(['/listar-tarefa']);
      },
      error: err => {
        this.toastService.openErrorToast(err.error.message);
      }
    });

  }

}
