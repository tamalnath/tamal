import { Component } from '@angular/core';
import { User, auth } from 'firebase/app';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authenticationService: AuthenticationService) {
    authenticationService.message = 'login';
  }

  loginAnonymous() {
    this.authenticationService.login(null);
  }

  loginFacebook() {
    this.authenticationService.login(new auth.FacebookAuthProvider);
  }

  loginGithub() {
    this.authenticationService.login(new auth.GithubAuthProvider);
  }

  loginGoogle() {
    this.authenticationService.login(new auth.GoogleAuthProvider);
  }

  loginTwitter() {
    this.authenticationService.login(new auth.TwitterAuthProvider);
  }

}
