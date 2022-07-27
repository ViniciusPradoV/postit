import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent implements OnInit{

  constructor(
    private readonly router: Router
    ) { }

  public routesWithoutAction: string[] = ['/profile'];

  @Input()
  public postIt: PostItProxy;

  public isLiked: boolean = false;
 

  ngOnInit() {
    console.log(this.postIt);
  }

  public setLikeToPostIt(): void {
    this.isLiked = !this.isLiked;
  }

  public canShowIcons(): boolean {
    if(!this.routesWithoutAction.includes(this.router.url)) return true;
    else return false;
  }

}