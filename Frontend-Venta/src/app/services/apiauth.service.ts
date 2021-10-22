import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Response } from "../models/response";

@Injectable({
  providedIn: 'root'
})

export class ApiauthService{
  url: string = 'https://localhost:44327/api/User/login';

  constructor(private http: HttpClient){}

  login (email: string, password: string): Observable<Response>{
       return this.http.post<Response>(this.url, {email, password});
  }

}
