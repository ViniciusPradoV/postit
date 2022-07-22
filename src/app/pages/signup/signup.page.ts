import { Component, OnInit } from '@angular/core';
import { SignupPayload } from 'src/app/models/payloads/signup.payload';
import { HelperService } from 'src/app/services/helper.service';
import { goUp } from './signup.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  animations: [goUp]
})
export class SignupPage {

  constructor(private readonly helper: HelperService) { }

  public signupPayload: SignupPayload = {
    nome: '',
    email: '',
    emailConfirmation: '',
    password: '',
    passwordConfirmation: '',
    
  }


  public isLoading: boolean = false;
  public isNameNotEmpty: boolean = true;
  public isEmailValid: boolean = true;
  public isPasswordMinLen: boolean = true;
  


  public logoClick($event): void {
    console.log($event);
  }

  public checkIsNameNotEmpty(): boolean {

      return this.signupPayload.nome.length > 0 
   
  }
  public checkIsEmailEqual(): boolean {

    return this.signupPayload.email === this.signupPayload.emailConfirmation

  }
    
  public checkIsPasswordEqual(): boolean {

    return this.signupPayload.password === this.signupPayload.passwordConfirmation;
  }

  public checkIsEmailValid(): boolean{

    return this.helper.isEmailValid(this.signupPayload.email);
  }

  public passwordHasMinLength(): boolean{

    return this.signupPayload.password.length > 6
  }

  public setNameWarning(){
    if(this.checkIsNameNotEmpty()) this.isNameNotEmpty = true;
    else this.isNameNotEmpty = false;
  }

  public setEmailWarning(){
    if(this.checkIsEmailValid()) this.isEmailValid = true;
    else this.isEmailValid = false;
  }

  public setPasswordWarning(){
    if(this.passwordHasMinLength()) this.isPasswordMinLen = true;
    else this.isPasswordMinLen = false;
  }

  public canCreateAccount(){

    if(this.checkIsEmailEqual() && 
      this.checkIsEmailValid() && 
      this.checkIsPasswordEqual() && 
      this.passwordHasMinLength() &&
      this.checkIsNameNotEmpty()) return true;
      
      return false;
  }

  public async createAccount(): Promise<void> {
    if(!this.canCreateAccount()) return;

    this.isLoading = true;

    await this.helper.showToast('Carregando...');
  }

}
