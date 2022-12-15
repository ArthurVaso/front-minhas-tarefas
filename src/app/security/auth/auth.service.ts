import { EsqueceuSenha } from './../../pages/esqueceu-senha/esqueceu-senha';
import { Observable, switchMap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpReturn, Usuario, UsuarioLogin } from 'src/app/types/Usuario';
import { environment } from 'src/environments/environment';
import { TokenService } from '../token/token.service';

const BASE_URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) { }

  login(usuario: UsuarioLogin): Observable<any>{
    return this.http
    .post<any>(BASE_URL + '/usuario/login', usuario)
    .pipe(switchMap((result: any) => {
      this.saveToken(result.jwt);
      this.saveUsuario(result.user);
      return of(null);
    }));
  }

  //Cria usuario
  signUp(usuario: Usuario): Observable<null> {
    return this.http
    .post<SignUpReturn>(BASE_URL + '/usuario/', usuario)
    .pipe(switchMap((result: SignUpReturn) => {
      this.saveToken(result.refresh_token);
      this.saveUsuario(result.usuario);
      return of(null);
    }));
  }

  update(usuario: Usuario){
    return this.http.put(BASE_URL + '/usuario/atualizar/'+ usuario.id, usuario);
  }

  updatePassword(esqueceuSenha: EsqueceuSenha){
    return this.http.patch(BASE_URL + '/usuario', esqueceuSenha);
  }

  signOut(): void {
    this.tokenService.signOut();
  }

  public saveToken(token: string): void {
    this.tokenService.saveToken(token);
  }

  public getToken(): string {
    return this.tokenService.getToken();
  }

  public saveUsuario(usuario: any): void {
    this.tokenService.saveUsuario(usuario);
  }

  public getUsuario(): Usuario {
    return this.tokenService.getUsuario();
  }

  public isLogged(): boolean {
    return this.tokenService.isLogged();
  }


}
