import { ListarTarefaComponent } from './pages/listar-tarefa/listar-tarefa.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { EsqueceuSenhaComponent } from './pages/esqueceu-senha/esqueceu-senha.component';
import { LoginGuard } from './security/guards/login-guard/login.guard';
import { CadastroTarefaComponent } from './pages/cadastro-tarefa/cadastro-tarefa.component';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { AuthInterceptor } from './security/auth/auth.interceptor';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const tokenInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};

const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent,
      canActivate: [LoginGuard]
    },
    {
      path: 'cadastro',
      component: CadastroUsuarioComponent,
      canActivate: [LoginGuard]
    },
    {
      path: 'login',
      component: LoginComponent,
      canActivate: [LoginGuard]
    },
    {
      path: 'cadastro-tarefa',
      component: CadastroTarefaComponent,
      canActivate: [LoginGuard]
    },
    {
      path: 'esqueceu-senha',
      component: EsqueceuSenhaComponent,
      canActivate: [LoginGuard]
    },
    {
      path: 'listar-tarefa',
      component: ListarTarefaComponent,
      canActivate: [LoginGuard]
    },
]
@NgModule({
    imports: [
      RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    ],
    exports: [RouterModule],
    providers: [
      tokenInterceptorProvider
    ]
  })
  export class AppRoutingModule {}
