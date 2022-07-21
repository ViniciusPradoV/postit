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
  public isNameEmpty: boolean = true;
  public isEmailValid: boolean = true;
  public isPasswordMinLen: boolean = true;
  


  public logoClick($event): void {
    console.log($event);
  }

  public checkIsNameEmpty(){

      if(this.signupPayload.nome.length > 0) this.isNameEmpty = true;
      else this.isNameEmpty = false;
  }
  public checkIsEmailEqual(): boolean{
    if(this.signupPayload.email === this.signupPayload.emailConfirmation){
      console.log(`checkIsEmailEqual: ${this.signupPayload.emailConfirmation}`);
      console.log(`checkIsEmailEqual: ${this.signupPayload.email}`);
       return true;
      }
    else return false;
  }

  public checkIsPasswordEqual(): boolean {
    if(this.signupPayload.password === this.signupPayload.passwordConfirmation) return true;
    else return false;
  }

  public checkIsEmailValid(){

    this.isEmailValid = this.helper.isEmailValid(this.signupPayload.email);
  }

  public passwordHasMinLength(){

    if(this.signupPayload.password.length > 6) this.isPasswordMinLen= true;
    else this.isPasswordMinLen = false;
  }

  public canCreateAccount(){

    if(this.checkIsEmailEqual() && 
      this.isEmailValid && 
      this.checkIsPasswordEqual() && 
      this.isPasswordMinLen &&
      this.isNameEmpty) return true;

      return false;
  }

  public async createAccount(): Promise<void> {
    if(!this.canCreateAccount()) return;

    this.isLoading = true;
    console.log(this.signupPayload);

    await this.helper.showToast('Carregando...');
  }

}
