import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private angularFire: AngularFire, private authenticationService: AuthenticationService) {
    angularFire.auth.subscribe(auth => authenticationService.login(auth));
  }

  ngOnInit() {
  }

  loginAnonymous() {
    this.angularFire.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });
  }

  loginFacebook() {
    this.angularFire.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Redirect,
    });
  }

  loginGithub() {
    this.angularFire.auth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Redirect,
    });
  }

  loginGoogle() {
    this.angularFire.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect,
    });
  }

  loginTwitter() {
    this.angularFire.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Redirect,
    });
  }

  logout() {
    this.angularFire.auth.logout();
    this.authenticationService.logout();
  }
}
