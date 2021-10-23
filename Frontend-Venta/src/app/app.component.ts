import { Component } from '@angular/core';
import { usuario } from './models/usuario';
import { ApiauthService } from './services/apiauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend-Venta';
  usuario: usuario

  constructor(public apiauthService: ApiauthService,
    private router: Router){
      this.apiauthService.usuar.subscribe(res =>{
        this.usuario = res;
        console.log('cambio el usuario:' + res);
      })
    }

    logout() {
      this.apiauthService.logout();
      this.router.navigate(['/login']);
    }
}
