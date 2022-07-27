import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PostItColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';
import { Location } from '@angular/common';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.page.html',
  styleUrls: ['./feed-detail.page.scss'],
})
export class FeedDetailPage implements OnInit {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private location: Location
  ) {
      console.log(this.activatedRoute);
      this.postItId = +this.activatedRoute.snapshot.params.id;
   }

  public postItArray: PostItProxy[] = [
    {
      id: 0,
      title: 'Título do post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dui augue, et rutrum turpis venenatis a. Aenean sodales tincidunt vestibulum. Duis justo felis, sollicitudin sit amet dictum eu, dignissim id est. In enim elit, pulvinar ac condimentum quis, sodales tempus nunc. Mauris id odio id lectus pharetra vestibulum. Duis ultrices nunc non ante vulputate, non aliquam lorem malesuada. Curabitur egestas lacus eget nulla eleifend auctor. Duis tincidunt id lectus rhoncus imperdiet. Mauris eu consequat metus. Ut viverra purus id mi aliquam, ultricies facilisis eros vulputate.',
     color: PostItColorEnum.RED,
     comments: [
      {
      comment: 'Show. Amei as dicas!!! <3',
     },
     {
      comment: 'Show. Amei as dicas!!! <3',
     },
     {
      comment: 'Show. Amei as dicas!!! <3',
     },
    ]
    },
    {
      id: 1,
      title: 'Título do post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dui augue, et rutrum turpis venenatis a. Aenean sodales tincidunt vestibulum. Duis justo felis, sollicitudin sit amet dictum eu, dignissim id est. In enim elit, pulvinar ac condimentum quis, sodales tempus nunc. Mauris id odio id lectus pharetra vestibulum. Duis ultrices nunc non ante vulputate, non aliquam lorem malesuada. Curabitur egestas lacus eget nulla eleifend auctor. Duis tincidunt id lectus rhoncus imperdiet. Mauris eu consequat metus. Ut viverra purus id mi aliquam, ultricies facilisis eros vulputate.',
      color: PostItColorEnum.PINK,
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

  public postIt: PostItProxy;

  private postItId: number = 0;

  public isLiked: boolean = false;

  ngOnInit() {
    console.log(this.postItId);
    this.getPostIt();
  }

  public getPostIt(): void {
    console.log(this.postItId);
    this.postIt = this.postItArray.find(post => post.id === this.postItId);
  }

  public setLikeToPostIt(): void {
    this.isLiked = !this.isLiked;
  }

  public toPreviousPage(): void {
    return this.location.back();
  }

}