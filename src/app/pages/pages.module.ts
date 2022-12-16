import { TarefaComponent } from './tarefa/tarefa.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material-components/material.module';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroTarefaComponent } from './cadastro-tarefa/cadastro-tarefa.component';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import {LOCALE_ID, DEFAULT_CURRENCY_CODE} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { NgChartsModule } from 'ng2-charts';

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    CadastroTarefaComponent,
    ListarTarefaComponent,
    PerfilUsuarioComponent,
    TarefaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatIconModule,
    NgChartsModule,
    RouterModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
  },
  {
      provide:  DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
  },
  ]
})
export class PagesModule { }
