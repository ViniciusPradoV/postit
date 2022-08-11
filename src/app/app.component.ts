import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { container } from './app.animations';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [
    container]
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private readonly router: Router,
    private contexts: ChildrenOutletContexts,
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,

  ) {
    router.events
          .pipe(filter((event) => event instanceof NavigationEnd))
          .subscribe((route: NavigationEnd)=> {

            if (!this.routesWithoutNavbar.includes(route.urlAfterRedirects)) {
              this.canShowNavbar = true;
            }
            else {
              this.canShowNavbar = false;
            }
            
    })
  }
  public myScreenOrientation = window.screen.orientation;
  public canShowNavbar: boolean =  true;
  public routesWithoutNavbar: string[] = ['/login', '/signup'];

  public routeSubscription: Subscription;

  public ngOnInit(): void {
    this.myScreenOrientation.lock("portrait");
  }

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  
}
