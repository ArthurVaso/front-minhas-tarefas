import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/security/auth/auth.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Setting } from './setting';

const BASE_URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(
    private http: HttpClient,
    private authService: AuthService  
  ) { }

  getSetting(): Observable<any> {
    const userID = this.authService.getUser().id;
    return this.http.get<any>(BASE_URL + '/setting/' + userID)
              .pipe(map((result: any) => result[0]));
  }

}
