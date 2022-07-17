import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {
  constructor(
    private readonly router: Router,
  ) {
    console.log(router);
    router.events
          .pipe(filter((event) => event instanceof NavigationEnd))
          .subscribe((route: NavigationEnd)=> {
            console.log(route.url);

            if(this.routesWithoutNavbar.includes(route.url)) return;

            this.canShowNavbar = true;
    })
  }

  public canShowNavbar: boolean =  false;
  public routesWithoutNavbar: string[] = ['/login'];

  public routeSubscription: Subscription;

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
