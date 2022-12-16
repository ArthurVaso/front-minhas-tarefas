import { environment } from 'src/environments/environment';
import { Tarefa } from './tarefa';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/security/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(
    private http: HttpClient,
    private authService: AuthService  
  ) { }

  create(tarefa: Tarefa) {
    tarefa = {...tarefa, usuarioID: ((this.authService.getUsuario().id as unknown) as number)}
    return this.http.post(BASE_URL + '/tarefa', tarefa);
  }

  list() : Observable<Tarefa[]>{
    const userID = this.authService.getUsuario().id;
    return this.http.get<Tarefa[]>(BASE_URL + '/tarefa/all/'+ userID);
  }

  getById(id : number) : Observable<Tarefa>{
    const userID = this.authService.getUsuario().id;
    return this.http.get<Tarefa>(BASE_URL + '/tarefa/'+ userID +'/'+ id); 
  }

  getBydate(id : number) : Observable<Tarefa>{
    const userID = this.authService.getUsuario().id;
    const data = Date.now();
    return this.http.get<Tarefa>(BASE_URL + '/tarefa/all_data/'+ userID +'/'+ id+'/'+ data); 
  }

  update(tarefa: Tarefa) {
    const userID = this.authService.getUsuario().id;
    tarefa = {...tarefa, usuarioID: ((this.authService.getUsuario().id as unknown) as number)}
    return this.http.patch(BASE_URL + '/tarefa/'+ userID +'/'+ tarefa.id, tarefa);
  }

  delete(id: number) {
    const userID = this.authService.getUsuario().id;
    return this.http.delete(BASE_URL + '/tarefa/'+ userID +'/'+ id);
  }

}
