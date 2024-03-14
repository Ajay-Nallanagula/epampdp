import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

//Even Guards are Services only
@Injectable()
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate: CanActivateFn = (route, state) => {
    return this.authService.isAuthenticated().then((loggedInStatus) => {
      if (!loggedInStatus) {
        //If loggedInStatus is false , navigate to homepage
        this.router.navigate(['/']);
      }
      return true;
    });
  };

  canActivateChild: CanActivateFn = (route, state) => {
    return this.canActivate(route, state);
  };
}
