import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPayload } from 'src/app/models/payloads/create-user.payload';
import { SignupPayload } from 'src/app/models/payloads/signup.payload';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';
import { goUp } from './signup.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  animations: [goUp]
})
export class SignupPage {

  constructor(
    private readonly helper: HelperService,
    private readonly router: Router,
    private readonly auth: AuthService,

    ) { }

  public registerPayload: RegisterPayload = {
    name: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  }


  public isLoading: boolean = false;
  public isNameNotEmpty: boolean = true;
  public isEmailValid: boolean = true;
  public isPasswordMinLen: boolean = true;
  


  public logoClick($event): void {
    console.log($event);
  }

  public checkIsNameNotEmpty(): boolean {

      return this.registerPayload.name.length > 0 
   
  }
  public checkIsEmailEqual(): boolean {

    return this.registerPayload.email === this.registerPayload.confirmEmail

  }
    
  public checkIsPasswordEqual(): boolean {

    return this.registerPayload.password === this.registerPayload.confirmPassword;
  }

  public checkIsEmailValid(): boolean{

    return this.helper.isEmailValid(this.registerPayload.email);
  }

  public passwordHasMinLength(): boolean{

    return this.registerPayload.password.length > 6
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
    const [isSuccess, message] = await this.auth.register(this.registerPayload);
    this.isLoading = false;

    if (isSuccess)
      return void await this.router.navigate(['/home']);


    await this.helper.showToast('Carregando...');
  }

}
