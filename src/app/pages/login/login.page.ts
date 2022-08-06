import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginPayload } from 'src/app/models/payloads/login.payload';
import { HttpAsyncService } from 'src/app/modules/http-async/services/http-async.service';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';
import { goDown } from './login.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [goDown]
})
export class LoginPage {

  constructor(
    private readonly helper: HelperService,
    private readonly router: Router,
    private readonly auth: AuthService,
    ) { }

    public loginPayload: LoginPayload = {
      email:'',
      password:'',
  
    }

  public isLoading: boolean = false;

  public isSigning: boolean = false;


  public async login(): Promise<void> {
    if(!this.canLogin()) return;

    this.isLoading = true;
    const [isSuccess, message] = await this.auth.login(this.loginPayload.email, this.loginPayload.password);
    this.isLoading = false;

    if (isSuccess) {
      return void await this.router.navigate(['/home']);
    }

    // Toast
    await this.helper.showToast('Carregando...');
    

    // Alert
    await this.helper.showAlert("Hello World", [
      {
        text: 'OK',
        handler: () => console.log('Ok!'),
      },
      {
        text: 'Outro',
        handler: () => console.log('Outro'),
      }
    ]);

    this.router.navigateByUrl('/home');
  }

  public canLogin(): boolean {
    const emailIsValid = this.helper.isEmailValid(this.loginPayload.email);

    if(emailIsValid && this.loginPayload.password.length >= 6) return true;

    return false;
  }

  public logoClick($event): void {
    console.log($event);
  }


}
