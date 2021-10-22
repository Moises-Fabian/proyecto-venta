import { Component, OnInit } from '@angular/core';
import { ApiauthService } from '../services/apiauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiauth: ApiauthService) { }

  public email: string;
  public password: string;

  ngOnInit(): void {
  }

  login(){
    this.apiauth.login(this.email, this.password).subscribe(response =>{
      console.log(response);
    })
  }

}
