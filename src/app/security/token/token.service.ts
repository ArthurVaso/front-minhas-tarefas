import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/types/Usuario';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  signOut(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY) as string;
  }

  public saveUsuario(usuario: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(usuario));
  }

  public getUsuario(): Usuario {
    return JSON.parse(localStorage.getItem(USER_KEY) as string);
  }

  public isLogged(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  }

}
