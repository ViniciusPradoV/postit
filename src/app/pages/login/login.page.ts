import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginPayload } from 'src/app/models/payloads/login.payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private readonly toastController: ToastController,
    private readonly alertController: AlertController,
    ) { }

  public isLoading: boolean = false;

  public loginPayload: LoginPayload = {
    email:'',
    password:'',

  }


  public async login(): Promise<void> {
    this.isLoading = true;
    console.log(this.loginPayload);

    const toast = await this.toastController.create({  
      message: 'Logando...',
      duration: 2000 //2s
    });

    toast.present();

    const alert = await this.alertController.create({
      header: 'Hello World',
      buttons:[
        {
          text:'OK',
          handler: () => {console.log('Ok!')}
        }
      ]
    });
    alert.present()

  }

  public canLogin(): boolean {
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    const emailIsValid = regex.test(this.loginPayload.email);

    if(emailIsValid && this.loginPayload.password.length >= 6) return true;

    return false;
  }

  public logoClick($event): void {
    console.log($event);
  }


}
