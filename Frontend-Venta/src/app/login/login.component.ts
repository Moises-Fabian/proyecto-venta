import { Component, OnInit } from '@angular/core';
import { ApiauthService } from '../services/apiauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiauthService: ApiauthService,
    private router: Router) {
      if (this.apiauthService.usuarioData) {
        this.router.navigate(['/']);
      }
    }

  public email: string;
  public password: string;

  ngOnInit(): void {
  }

  login(){
    this.apiauthService.login(this.email, this.password).subscribe(response =>{
      if(response.exito === 1){
        this.router.navigate(['/']);
      }
    })
  }

}
