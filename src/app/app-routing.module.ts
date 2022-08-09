import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';

export const authenticatedRouteParams = {
  canActivate: [AuthenticationGuard],
  data: {
    protectedRoute: true,
    routeToRedirect: '/login'
  }
}
export const unAuthenticatedRouteParams = {
  canActivate: [AuthenticationGuard],
  data: {
    unprotectedRoute: true,
    routeToRedirect: '/home'
  }
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    data: {animation: 'loginPage'}
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    data: {animation: 'loginPage'}
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/main/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./pages/main/feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/main/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule),
    data: {animation: 'signupPage'}
  },
  {
    path: 'feed/:id',
    loadChildren: () => import('./pages/main/feed-detail/feed-detail.module').then( m => m.FeedDetailPageModule)
  },
  {
    path:'**',
    redirectTo: 'login',
    pathMatch: 'full',
    data: {animation: 'login'}
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
