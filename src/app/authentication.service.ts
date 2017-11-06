import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { User, auth } from 'firebase/app';

@Injectable()
export class AuthenticationService implements CanActivate {

  private redirectUrl: string;
  public user: User;
  public inProgress: boolean;
  public message: string;

  constructor(private router: Router, private angularFireAuth: AngularFireAuth) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.user) {
      return true;
    }
    this.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;
  }

  public login(authProvider: auth.AuthProvider) {
    let promise: any;
    if (authProvider == null) {
      promise = this.angularFireAuth.auth.signInAnonymously();
    } else {
      promise = this.angularFireAuth.auth.signInWithPopup(authProvider);
    }
    this.inProgress = true;
    promise.then(response => {
      this.inProgress = false;
      this.user = this.angularFireAuth.auth.currentUser;
      this.message = null;
      if (this.redirectUrl) {
        this.router.navigate([this.redirectUrl]);
      }
    }, reject => {
      this.inProgress = false;
      this.user = undefined;
      try {
        let msg = JSON.parse(reject.message);
        this.message  = msg["error"]["message"];
      } catch (e) {
        this.message = reject.message;
      }
      console.log(reject);
    });
  }

  public logout() {
    this.angularFireAuth.auth.signOut().then(Response => {
      this.inProgress = false;
      this.user = this.angularFireAuth.auth.currentUser;
      this.message = null;
    }, reject => {
      this.inProgress = false;
      try {
        let msg = JSON.parse(reject.message);
        this.message  = msg["error"]["message"];
      } catch (e) {
        this.message = reject.message;
      }
      console.log(reject);
    });
  }

}
