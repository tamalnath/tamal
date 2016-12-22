import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthenticationService implements CanActivate {

  public redirectUrl: string;
  public uid: string;
  public displayName: string;
  public photoURL: string;

  constructor(private router: Router, private angularFire: AngularFire) {
    angularFire.auth.subscribe(auth => this.callback(auth));
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    if (this.uid) {
      return true;
    }
    this.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;
  }

  public login(authProviders: AuthProviders, authMethods: AuthMethods = AuthMethods.Redirect) {
    this.angularFire.auth.login({
      provider: authProviders,
      method: authMethods
    });
  }

  public logout() {
    this.uid = null;
    this.displayName = null;
    this.photoURL = null;
    this.angularFire.auth.logout();
  }

  private callback(auth : FirebaseAuthState) {
    if (auth) {
      this.uid = auth.uid;
      this.displayName = auth.auth.displayName;
      this.photoURL = auth.auth.photoURL;
      if (this.redirectUrl) {
        this.router.navigate([this.redirectUrl]);
      }
    } else {
      this.uid = null;
      this.displayName = null;
      this.photoURL = null;
    }
  }

}
