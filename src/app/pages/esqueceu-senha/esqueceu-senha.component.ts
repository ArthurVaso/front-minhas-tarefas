import { ToastService } from 'src/app/material-components/services/toast/toast.service';
import { Router } from '@angular/router';
import { AuthService } from './../../security/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { EsqueceuSenha } from './esqueceu-senha';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})
export class EsqueceuSenhaComponent implements OnInit {

  public email: string = '';
  public senhaAtual: string = '';
  public senha: string = '';

  public isLogged = false

  private esqueceuSenha = {} as EsqueceuSenha;

  constructor(
    private authService : AuthService, 
    private toastService : ToastService, 
    private router : Router
  ) { }

  ngOnInit(): void {
    this.isLogged = !this.authService.isLogged();
  }

  onClickButtonProsseguir() {

    this.esqueceuSenha.email = this.email || this.authService.getUsuario().email;
    this.esqueceuSenha.senha_atual = this.senhaAtual;
    this.esqueceuSenha.nova_senha = this.senha;

    this.authService.updatePassword(this.esqueceuSenha).subscribe({
      next: (result: any) => {
        this.toastService.openSuccessToast(result.mensagem);
        this.router.navigate([!this.isLogged ? '/cadastro-tarefa' : '/login']);
      },
      error: err => {
        this.toastService.openErrorToast(err.error.mensagem)
      }
    });

  }

}
