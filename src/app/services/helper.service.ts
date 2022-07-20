import { Injectable } from "@angular/core";
import { AlertController, ToastController, AlertButton } from "@ionic/angular";

@Injectable({
    providedIn:'root',
})
/*
 Serviço que ajuda a mandar feedbacks pro usuário
*/

export class HelperService {

    constructor(
        private readonly toastController : ToastController,
        private readonly alertController: AlertController,
    ){}


    public async showToast(message: string, duration?: number): Promise<void> {

        const toast = await this.toastController.create({  
            message: message,
            duration: duration,
          });
      
          toast.present();
    }

    public async showAlert(header: string, buttons: (AlertButton | string)[]): Promise<void>{

        const alert = await this.alertController.create({
            header: header,
            buttons: buttons,
          });
          alert.present()
    }

    public isEmailValid(email: string): boolean {

        const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

        return regex.test(email);
    }

}