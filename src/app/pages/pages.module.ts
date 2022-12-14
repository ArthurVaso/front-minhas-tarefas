import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroTarefaComponent } from './cadastro-tarefa/cadastro-tarefa.component';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    CadastroTarefaComponent,
    ListarTarefaComponent,
    PerfilUsuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
