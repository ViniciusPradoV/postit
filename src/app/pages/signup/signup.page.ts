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
    emailConfirmation: '',
    password: '',
    passwordConfirmation: '',
    
  }

  public isLoading: boolean = false;

  public logoClick($event): void {
    console.log($event);
  }

  public isNameEmpty(): boolean{

      if(this.signupPayload.nome.length > 0) return true;

      return false;
  }
  public isEmailEqual(): boolean {
    if(this.signupPayload.email === this.signupPayload.emailConfirmation) return true;

    return false;
  }

  public isPasswordEqual(): boolean {
    if(this.signupPayload.password === this.signupPayload.passwordConfirmation) return true;

    return false;
  }

  public isEmailValid(){

    return this.helper.isEmailValid(this.signupPayload.email);
  }

  public passwordHasMinLength(){

    if(this.signupPayload.password.length > 6) return true;

    return false;
  }

  public canCreateAccount(){

    if(this.isEmailEqual() && 
      this.isEmailValid() && 
      this.isPasswordEqual() && 
      this.passwordHasMinLength() &&
      this.isNameEmpty()) return true;

      return false;
  }

  public async createAccount(): Promise<void> {
    if(!this.canCreateAccount()) return;

    this.isLoading = true;
    console.log(this.signupPayload);

    await this.helper.showToast('Carregando...');
  }

}
