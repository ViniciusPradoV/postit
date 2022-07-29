import { Component, OnInit } from '@angular/core';
import { PostItColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private menu: MenuController) { }

  public postItArray: PostItProxy[] = [
    {
      id: 0,
      title: 'Título do post0',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.GREEN
    },
    {
      id: 1,
      title: 'Título do post1',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.YELLOW
    },
    {
      id: 2,
      title: 'Título do post2',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.BLUE
    },
    {
      id: 3,
      title: 'Título do post3',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.PURPLE
    },
    {
      id: 4,
      title: 'Título do post4',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.RED
    },
    {
      id: 5,
      title: 'Título do post4',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.PINK
    }
  ];

  ngOnInit() {
  }

 public openMenu() {
    this.menu.enable(true, 'sidebar');
     this.menu.open('end');
  }
}
