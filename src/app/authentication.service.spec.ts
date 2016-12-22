/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';

import { AuthenticationService } from './authentication.service';

const firebaseAppConfig:FirebaseAppConfig = {
  apiKey: "AIzaSyCpU0fDlOIuFmryLDiFOULqsQzQYdbBe44",
  authDomain: "tamal-1a86e.firebaseapp.com",
  databaseURL: "https://tamal-1a86e.firebaseio.com",
  storageBucket: "tamal-1a86e.appspot.com"
}

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
        AngularFireModule.initializeApp(firebaseAppConfig, {})
      ],
      providers: [AuthenticationService]
    });
  });

  it('should ...', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
