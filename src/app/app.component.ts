import { Component, OnDestroy } from '@angular/core';
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
export class AppComponent implements OnDestroy {
  constructor(
    private readonly router: Router,
    private contexts: ChildrenOutletContexts
  ) {
    console.log(router);
    router.events
          .pipe(filter((event) => event instanceof NavigationEnd))
          .subscribe((route: NavigationEnd)=> {
            console.log(route.url);

            if(this.routesWithNavbar.includes(route.url)) this.canShowNavbar = true;
            
    })
  }

  public canShowNavbar: boolean =  false;
  public routesWithNavbar: string[] = ['/home','/feed','profile'];

  public routeSubscription: Subscription;

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  
}
