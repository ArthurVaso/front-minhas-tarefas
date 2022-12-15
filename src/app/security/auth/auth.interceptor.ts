import { Router } from '@angular/router';
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

const LIST_NO_TOKEN_NEEDED_REQ = [
  '/login',
  '/cadastro-usuario',
  '/esqueceu-senha',
  '/home',
]

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let isTokenReq = this.verifyTokenReq(req);

    if(isTokenReq) {
        const authToken = this.authService.getToken();
        req = req.clone({
            setHeaders: {
                'x-access-token': authToken
            }
        });
    }

    return next.handle(req);
  }

  private verifyTokenReq(req: HttpRequest<any>) {
      let tokenReq = true;

      for (let i = 0; i < LIST_NO_TOKEN_NEEDED_REQ.length; i++) {

          if (this.router.url.includes(LIST_NO_TOKEN_NEEDED_REQ[i])) {
              tokenReq = false;
              break;
          }

      }

      if (this.router.url.includes('/esqueceu-senha')) {
        tokenReq = this.authService.isLogged();
      }
      
      return tokenReq;
  }

}
