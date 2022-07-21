import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginPayload } from 'src/app/models/payloads/login.payload';
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
    ) { }

  public isLoading: boolean = false;

  public loginPayload: LoginPayload = {
    email:'',
    password:'',

  }

  public async login(): Promise<void> {
    if(!this.canLogin()) return;

    this.isLoading = true;
    console.log(this.loginPayload);


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
