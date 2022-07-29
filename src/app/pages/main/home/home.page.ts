import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostitModalComponent } from 'src/app/modals/postit-modal/postit-modal.component';
import { PostItColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';
import {goToCenter} from './home.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations:[goToCenter]
})
export class HomePage implements OnInit {

  constructor(
    private readonly  modalController: ModalController
    ) {}

  public postItColorEnum: typeof PostItColorEnum = PostItColorEnum;

  public postItArray: PostItProxy[] = [
    {
      id: 0,
      title: 'Título do post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dui augue, et rutrum turpis venenatis a. Aenean sodales tincidunt vestibulum. Duis justo felis, sollicitudin sit amet dictum eu, dignissim id est. In enim elit, pulvinar ac condimentum quis, sodales tempus nunc. Mauris id odio id lectus pharetra vestibulum. Duis ultrices nunc non ante vulputate, non aliquam lorem malesuada. Curabitur egestas lacus eget nulla eleifend auctor. Duis tincidunt id lectus rhoncus imperdiet. Mauris eu consequat metus. Ut viverra purus id mi aliquam, ultricies facilisis eros vulputate.',
      color: PostItColorEnum.RED,
      isCentered: false
    },
    {
      id: 1,
      title: 'Título do post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dui augue, et rutrum turpis venenatis a. Aenean sodales tincidunt vestibulum. Duis justo felis, sollicitudin sit amet dictum eu, dignissim id est. In enim elit, pulvinar ac condimentum quis, sodales tempus nunc. Mauris id odio id lectus pharetra vestibulum. Duis ultrices nunc non ante vulputate, non aliquam lorem malesuada. Curabitur egestas lacus eget nulla eleifend auctor. Duis tincidunt id lectus rhoncus imperdiet. Mauris eu consequat metus. Ut viverra purus id mi aliquam, ultricies facilisis eros vulputate.',
      color: PostItColorEnum.PINK,
      isCentered: false
    },
    {
      id: 2,
      title: 'Título do post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dui augue, et rutrum turpis venenatis a. Aenean sodales tincidunt vestibulum. Duis justo felis, sollicitudin sit amet dictum eu, dignissim id est. In enim elit, pulvinar ac condimentum quis, sodales tempus nunc. Mauris id odio id lectus pharetra vestibulum. Duis ultrices nunc non ante vulputate, non aliquam lorem malesuada. Curabitur egestas lacus eget nulla eleifend auctor. Duis tincidunt id lectus rhoncus imperdiet. Mauris eu consequat metus. Ut viverra purus id mi aliquam, ultricies facilisis eros vulputate.',
      color: PostItColorEnum.BLUE,
      isCentered: false
    },
    {
      id: 3,
      title: 'Título do post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dui augue, et rutrum turpis venenatis a. Aenean sodales tincidunt vestibulum. Duis justo felis, sollicitudin sit amet dictum eu, dignissim id est. In enim elit, pulvinar ac condimentum quis, sodales tempus nunc. Mauris id odio id lectus pharetra vestibulum. Duis ultrices nunc non ante vulputate, non aliquam lorem malesuada. Curabitur egestas lacus eget nulla eleifend auctor. Duis tincidunt id lectus rhoncus imperdiet. Mauris eu consequat metus. Ut viverra purus id mi aliquam, ultricies facilisis eros vulputate.',
      color: PostItColorEnum.YELLOW,
      isCentered: false
    },
    {
      id: 4,
      title: 'Título do post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dui augue, et rutrum turpis venenatis a. Aenean sodales tincidunt vestibulum. Duis justo felis, sollicitudin sit amet dictum eu, dignissim id est. In enim elit, pulvinar ac condimentum quis, sodales tempus nunc. Mauris id odio id lectus pharetra vestibulum. Duis ultrices nunc non ante vulputate, non aliquam lorem malesuada. Curabitur egestas lacus eget nulla eleifend auctor. Duis tincidunt id lectus rhoncus imperdiet. Mauris eu consequat metus. Ut viverra purus id mi aliquam, ultricies facilisis eros vulputate.',
      color: PostItColorEnum.PURPLE,
      isCentered: false
    },
    {
      id: 5,
      title: 'Título do post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dui augue, et rutrum turpis venenatis a. Aenean sodales tincidunt vestibulum. Duis justo felis, sollicitudin sit amet dictum eu, dignissim id est. In enim elit, pulvinar ac condimentum quis, sodales tempus nunc. Mauris id odio id lectus pharetra vestibulum. Duis ultrices nunc non ante vulputate, non aliquam lorem malesuada. Curabitur egestas lacus eget nulla eleifend auctor. Duis tincidunt id lectus rhoncus imperdiet. Mauris eu consequat metus. Ut viverra purus id mi aliquam, ultricies facilisis eros vulputate.',
      color: PostItColorEnum.GREEN,
      isCentered: false
    },
  ]

  ngOnInit() {
    console.log('postItColorEnum', this.postItColorEnum);
  }

  public consoleColor(color: string): void{
    console.log("color", color);
  }

  public printPostIt(event: PostItProxy): void {
    console.log('postit', event);
  }

  public async openPostModal(postIt: PostItProxy): Promise<void> {

    const modal = await this.modalController.create({
      component: PostitModalComponent,
      cssClass: 'background-modal',
      backdropDismiss: true,
      componentProps: {
        postIt
      }
    });

    await modal.present();

    modal.onDidDismiss().then(async ({ data }) => {
      console.log(data);
      if (data.isDeleted) {
        this.postItArray = this.postItArray.filter(post => post.id !== data.postit.id);
      }
    });
  }

  public async openNewPostModal(color: string): Promise<void> {

    const modal = await this.modalController.create({
      component: PostitModalComponent,
      cssClass: 'background-modal',
      backdropDismiss: true,
      componentProps: {
        color,
        create: true
      }
    });

    await modal.present();

    modal.onDidDismiss().then(async ({ data }) => {
      console.log('postIt', data.postit);
      if (data.postit) {
        this.postItArray.push(data.postit);
      }
    });

  }

  public toggleCentered(postIt: PostItProxy): void{
    postIt.isCentered = !postIt.isCentered
    console.log("isCentered:", postIt.isCentered);
  }
}
