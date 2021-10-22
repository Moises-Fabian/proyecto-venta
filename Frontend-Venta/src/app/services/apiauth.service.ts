import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { Response } from "../models/response";
import { usuario } from '../models/usuario';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ApiauthService{
  url: string = 'https://localhost:44327/api/User/login';

  private usuarioSubject: BehaviorSubject<usuario>;

  public get usuarioData(): usuario{
    return this.usuarioSubject.value;
  }

  constructor(private http: HttpClient){
    this.usuarioSubject =
     new BehaviorSubject<usuario>(JSON.parse(localStorage.getItem('usuario')));
  }

  login (email: string, password: string): Observable<Response>{
       return this.http.post<Response>(this.url, {email, password}).pipe(
         map(res => {
           if(res.exito === 1){
            const usuario : usuario = res.data;
            localStorage.setItem('usuario', JSON.stringify(usuario))
            this.usuarioSubject.next(usuario);
           }

           return res;
         })
       );
  }

  logout(){
    localStorage.removeItem('usuario');
    this.usuarioSubject.next(null);
  }

}
