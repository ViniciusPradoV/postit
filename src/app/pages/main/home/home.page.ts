import { Component, OnInit } from '@angular/core';
import { PostItColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  public postItColorEnum: typeof PostItColorEnum = PostItColorEnum;

  public postItArray: PostItProxy[] = [
    {
      id: 0,
      title: 'Título do post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dui augue, et rutrum turpis venenatis a. Aenean sodales tincidunt vestibulum. Duis justo felis, sollicitudin sit amet dictum eu, dignissim id est. In enim elit, pulvinar ac condimentum quis, sodales tempus nunc. Mauris id odio id lectus pharetra vestibulum. Duis ultrices nunc non ante vulputate, non aliquam lorem malesuada. Curabitur egestas lacus eget nulla eleifend auctor. Duis tincidunt id lectus rhoncus imperdiet. Mauris eu consequat metus. Ut viverra purus id mi aliquam, ultricies facilisis eros vulputate.',
     color: PostItColorEnum.RED,
    },
    {
      id: 1,
      title: 'Título do post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dui augue, et rutrum turpis venenatis a. Aenean sodales tincidunt vestibulum. Duis justo felis, sollicitudin sit amet dictum eu, dignissim id est. In enim elit, pulvinar ac condimentum quis, sodales tempus nunc. Mauris id odio id lectus pharetra vestibulum. Duis ultrices nunc non ante vulputate, non aliquam lorem malesuada. Curabitur egestas lacus eget nulla eleifend auctor. Duis tincidunt id lectus rhoncus imperdiet. Mauris eu consequat metus. Ut viverra purus id mi aliquam, ultricies facilisis eros vulputate.',
      color: PostItColorEnum.ROSE,
    },
    {
      id: 2,
      title: 'Título do post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dui augue, et rutrum turpis venenatis a. Aenean sodales tincidunt vestibulum. Duis justo felis, sollicitudin sit amet dictum eu, dignissim id est. In enim elit, pulvinar ac condimentum quis, sodales tempus nunc. Mauris id odio id lectus pharetra vestibulum. Duis ultrices nunc non ante vulputate, non aliquam lorem malesuada. Curabitur egestas lacus eget nulla eleifend auctor. Duis tincidunt id lectus rhoncus imperdiet. Mauris eu consequat metus. Ut viverra purus id mi aliquam, ultricies facilisis eros vulputate.',
      color: PostItColorEnum.BLUE,
    },
    {
      id: 3,
      title: 'Título do post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dui augue, et rutrum turpis venenatis a. Aenean sodales tincidunt vestibulum. Duis justo felis, sollicitudin sit amet dictum eu, dignissim id est. In enim elit, pulvinar ac condimentum quis, sodales tempus nunc. Mauris id odio id lectus pharetra vestibulum. Duis ultrices nunc non ante vulputate, non aliquam lorem malesuada. Curabitur egestas lacus eget nulla eleifend auctor. Duis tincidunt id lectus rhoncus imperdiet. Mauris eu consequat metus. Ut viverra purus id mi aliquam, ultricies facilisis eros vulputate.',
      color: PostItColorEnum.YELLOW,
    },
    {
      id: 4,
      title: 'Título do post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dui augue, et rutrum turpis venenatis a. Aenean sodales tincidunt vestibulum. Duis justo felis, sollicitudin sit amet dictum eu, dignissim id est. In enim elit, pulvinar ac condimentum quis, sodales tempus nunc. Mauris id odio id lectus pharetra vestibulum. Duis ultrices nunc non ante vulputate, non aliquam lorem malesuada. Curabitur egestas lacus eget nulla eleifend auctor. Duis tincidunt id lectus rhoncus imperdiet. Mauris eu consequat metus. Ut viverra purus id mi aliquam, ultricies facilisis eros vulputate.',
      color: PostItColorEnum.PURPLE,
    },
    {
      id: 5,
      title: 'Título do post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dui augue, et rutrum turpis venenatis a. Aenean sodales tincidunt vestibulum. Duis justo felis, sollicitudin sit amet dictum eu, dignissim id est. In enim elit, pulvinar ac condimentum quis, sodales tempus nunc. Mauris id odio id lectus pharetra vestibulum. Duis ultrices nunc non ante vulputate, non aliquam lorem malesuada. Curabitur egestas lacus eget nulla eleifend auctor. Duis tincidunt id lectus rhoncus imperdiet. Mauris eu consequat metus. Ut viverra purus id mi aliquam, ultricies facilisis eros vulputate.',
      color: PostItColorEnum.GREEN,
    },
  ]

  public cardClick(color: string): void {
    console.log(color);
  }

  public printPostIt(event: PostItProxy): void {
    console.log('postit', event);
  }

  ngOnInit() {
  }

}
