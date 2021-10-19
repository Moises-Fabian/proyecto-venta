import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Response } from '../models/response';
import { cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  url: string = 'https://localhost:44327/api/cliente';

  constructor(
    private _http: HttpClient
  ) { }

  getClientes(): Observable<Response>{
         return this._http.get<Response>(this.url);
  }

  add(cliente: cliente): Observable<Response> {
    return this._http.post<Response>(this.url, cliente);
  }

  edit(cliente: cliente): Observable<Response> {
    return this._http.put<Response>(this.url, cliente);
  }

  delete(id: number): Observable<Response> {
    return this._http.delete<Response>(`${this.url}/${id}`);
  }
}

