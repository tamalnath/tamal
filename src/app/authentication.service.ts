import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthenticationService implements CanActivate {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    if (this.isLoggedIn) {
      return true;
    }
    this.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;
  }
}
