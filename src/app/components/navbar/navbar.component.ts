import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { NavbarEnum } from 'src/app/models/enums/navbar.enum';
import { NavbarItemInterface } from 'src/app/models/interfaces/navbar-item.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  constructor(
    private readonly router: Router,
  ) { 
    router.events
          .pipe(filter((event) => event instanceof NavigationEnd))
          .subscribe((route: NavigationEnd)=> {
                  
          if(this.router.url.includes('/feed'))
          this.currentNavbar = NavbarEnum.FEED;
          if(this.router.url.includes('/home'))
          this.currentNavbar = NavbarEnum.HOME;
          if(this.router.url.includes('/profile'))
          this.currentNavbar = NavbarEnum.PROFILE;
    });
  }

  public navbarEnum: typeof NavbarEnum = NavbarEnum;
  public currentNavbar: NavbarEnum = NavbarEnum.HOME;

  public navbarList: NavbarItemInterface[] = [
    {
      type: NavbarEnum.FEED,
      link: '/feed',
      icon: 'assets/imgs/feed_disabled.svg',
      iconActivated: 'assets/imgs/feed_enabled.svg',
    },
    {
      type: NavbarEnum.HOME,
      link: '/home',
      icon: 'assets/imgs/home_disabled.svg',
      iconActivated: 'assets/imgs/home_enabled.svg',
    },
    {
      type: NavbarEnum.PROFILE,
      link: '/profile',
      icon: 'assets/imgs/user_disabled.svg',
      iconActivated: 'assets/imgs/user_enabled.svg',
    },
  ]
}
