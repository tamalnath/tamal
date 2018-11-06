import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User, auth } from 'firebase/app';
import { environment } from '../environments/environment';

@Injectable()
export class AuthenticationService implements CanActivate {

  private redirectUrl: string = "/";
  public user: User;
  public message: string;

  constructor(private router: Router, private angularFireAuth: AngularFireAuth) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!environment.production) {
      return true;
    }
    if (this.user) {
      return true;
    }
    this.redirectUrl = state.url;
    this.router.navigateByUrl('/login');
    return false;
  }

  public login(authProvider: auth.AuthProvider) {
    let promise: Promise<any>;
    this.message = 'progress';
    if (authProvider == null) {
      promise = this.angularFireAuth.auth.signInAnonymously();
    } else {
      promise = this.angularFireAuth.auth.signInWithPopup(authProvider);
    }
    promise.then(response => {
      this.user = response.user;
      // this.user = this.angularFireAuth.auth.currentUser;
      this.message = undefined;
      this.router.navigateByUrl(this.redirectUrl);
    }, reject => {
      this.user = undefined;
      try {
        let msg = JSON.parse(reject.message);
        this.message = msg["error"]["message"];
      } catch (e) {
        this.message = reject.message;
      }
      console.log(reject);
    });
  }

  public logout() {
    this.message = 'progress';
    this.angularFireAuth.auth.signOut().then(response => {
      this.message = undefined;
      this.user = this.angularFireAuth.auth.currentUser;
    }, reject => {
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
