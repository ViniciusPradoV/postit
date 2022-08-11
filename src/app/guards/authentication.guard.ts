import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { environment } from "src/environments/environment.prod";
import { AuthService } from "../services/auth.service";


@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {

  

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }
  
  public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    const { unprotectedRoute, protectedRoute, routeToRedirect } = route.data || {};


    if (!routeToRedirect)
      return true;

    const token = this.authService.getUserTokenFromStorage();
    const hasToken = !!token;

    if (!hasToken && unprotectedRoute)
      return true;

    if (hasToken && protectedRoute)
    {
      var user = localStorage.getItem(environment.keys.user)
      console.log(user)
      if(user == null){
      console.log(user)
      const [userStringfied, error] = await this.authService.getMe();
      localStorage.setItem(environment.keys.user, userStringfied)
      }
      return true
    }

    return void this.router.navigateByUrl(routeToRedirect);
    
  }

}