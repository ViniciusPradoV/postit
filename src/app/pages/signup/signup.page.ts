import { Component, OnInit } from '@angular/core';
import { SignupPayload } from 'src/app/models/payloads/signup.payload';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  constructor(private readonly helper: HelperService) { }

  public signupPayload: SignupPayload = {
    nome:'',
    email: '',
    password: '',
    
  }

  public logoClick($event): void {
    console.log($event);
  }

}
