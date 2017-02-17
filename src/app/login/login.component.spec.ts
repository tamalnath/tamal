import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';

import { LoginComponent } from './login.component';
import { AuthenticationService } from '../authentication.service';

const firebaseAppConfig:FirebaseAppConfig = {
  apiKey: "AIzaSyCpU0fDlOIuFmryLDiFOULqsQzQYdbBe44",
  authDomain: "tamal-1a86e.firebaseapp.com",
  databaseURL: "https://tamal-1a86e.firebaseio.com",
  storageBucket: "tamal-1a86e.appspot.com"
}

describe('LoginComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        MaterialModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(firebaseAppConfig, {})
      ],
      providers: [AuthenticationService],
    });
    TestBed.compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
