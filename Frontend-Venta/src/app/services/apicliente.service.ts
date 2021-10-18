import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  url: string = 'https://localhost:44327/api/cliente';

  constructor(
    private _hhtp: HttpClient
  ) { }

  getClientes(): Observable<Response>{
         return this._hhtp.get<Response>(this.url);
  }
}
