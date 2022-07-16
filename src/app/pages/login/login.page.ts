import { Component, OnInit } from '@angular/core';

export interface LoginPayload{}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor() { }

  public loginPayload: LoginPayload = {
    email:'',
    password:'',

  }

  public login(): void {
    console.log(this.loginPayload);
    
  }

}
