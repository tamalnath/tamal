import { Component, OnInit } from '@angular/core';
import { AuthProviders, AuthMethods } from 'angularfire2';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  loginAnonymous() {
    this.authenticationService.login(AuthProviders.Anonymous, AuthMethods.Anonymous);
  }

  loginFacebook() {
    this.authenticationService.login(AuthProviders.Facebook);
  }

  loginGithub() {
    this.authenticationService.login(AuthProviders.Github);
  }

  loginGoogle() {
    this.authenticationService.login(AuthProviders.Google);
  }

  loginTwitter() {
    this.authenticationService.login(AuthProviders.Twitter);
  }

}
