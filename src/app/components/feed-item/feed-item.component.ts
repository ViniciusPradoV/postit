import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent implements OnInit {

  constructor(
    private readonly router: Router
    ) { 
  }

  public canShowIcons: boolean = false;

  public routesWithoutAction: string[] = ['/profile'];

  @Input()
  public postIt: PostItProxy;

  public isLiked: boolean = false;

  ngOnInit() {
    console.log(this.postIt);

    this.router.events
          .pipe(filter((event) => event instanceof NavigationEnd))
          .subscribe((route: NavigationEnd)=> {
            console.log(route.urlAfterRedirects);
            if(!this.routesWithoutAction.includes(route.urlAfterRedirects)){
              console.log("true");
              this.canShowIcons = true;
            }
            else{
              console.log("false");
              this.canShowIcons = false;
            }

            this.canShowIcons = false;
    })
  }

  public setLikeToPostIt(): void {
    this.isLiked = !this.isLiked;
  }

}