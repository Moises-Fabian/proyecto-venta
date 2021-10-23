import { Component, OnInit } from '@angular/core';
import { ApiauthService } from '../services/apiauth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = this.formbuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });


  // public loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // });

  constructor(private apiauthService: ApiauthService,
    private router: Router,
    private formbuilder: FormBuilder) {
      // if (this.apiauthService.usuarioData) {
      //   this.router.navigate(['/']);
      // }
    }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value);
    this.apiauthService.login(this.loginForm.value).subscribe(response =>{
      if(response.exito === 1){
        this.router.navigate(['/']);
      }
    })
  }

}
