import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

  ngOnInit() {
  }

  loginAnonymous() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });
  }

  loginFacebook() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Redirect,
    });
  }

  loginGithub() {
    this.af.auth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Redirect,
    });
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect,
    });
  }

  loginTwitter() {
    this.af.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Redirect,
    });
  }

  logout() {
    this.af.auth.logout();
  }
}
