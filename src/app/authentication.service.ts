import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { User, auth } from 'firebase/app';

@Injectable()
export class AuthenticationService implements CanActivate {

  public redirectUrl: string;
  public uid: string;
  public displayName: string;
  public photoURL: string;

  user: Observable<User>;

  constructor(private router: Router, private angularFireAuth: AngularFireAuth) {
    this.user = angularFireAuth.authState;
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    if (this.uid) {
      return true;
    }
    this.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;
  }

  public login(authProvider: auth.AuthProvider) {
    this.angularFireAuth.auth.signInWithPopup(authProvider).then(response => {
      this.uid = response.user.uid;
      this.displayName = response.user.displayName;
      this.photoURL = response.user.photoURL;
      console.log(response);
    }, reject => console.log(reject));
  }

  public logout() {
    this.uid = null;
    this.displayName = null;
    this.photoURL = null;
    this.angularFireAuth.auth.signOut();
  }

}
