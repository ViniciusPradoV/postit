import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { NavbarEnum } from 'src/app/models/enums/navbar.enum';

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
            console.log(route.url);

                  
          if(this.router.url.includes('/feed'))
          this.currentNavbar = NavbarEnum.FEED;
          if(this.router.url.includes('/home'))
          this.currentNavbar = NavbarEnum.HOME;
          if(this.router.url.includes('/profile'))
          this.currentNavbar = NavbarEnum.PROFILE;

    })

    
  }

  public navbarEnum: typeof NavbarEnum = NavbarEnum;
  public currentNavbar: NavbarEnum = NavbarEnum.HOME;


}
