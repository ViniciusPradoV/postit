import { Component, OnDestroy } from '@angular/core';
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
export class AppComponent implements OnDestroy {
  constructor(
    private readonly router: Router,
    private contexts: ChildrenOutletContexts,
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,

  ) {
    console.log(router);
    router.events
          .pipe(filter((event) => event instanceof NavigationEnd))
          .subscribe((route: NavigationEnd)=> {
            console.log(route.urlAfterRedirects);

            if (!this.routesWithoutNavbar.includes(route.urlAfterRedirects)) {
              this.canShowNavbar = true;
            }
            else {
              this.canShowNavbar = false;
            }
            
    })
  }
  public canShowNavbar: boolean =  true;
  public routesWithoutNavbar: string[] = ['/login'];

  public routeSubscription: Subscription;

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  
}
