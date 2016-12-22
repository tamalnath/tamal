/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginComponent } from './login.component';
import { AuthenticationService } from '../authentication.service';

const firebaseAppConfig:FirebaseAppConfig = {
  apiKey: "AIzaSyCpU0fDlOIuFmryLDiFOULqsQzQYdbBe44",
  authDomain: "tamal-1a86e.firebaseapp.com",
  databaseURL: "https://tamal-1a86e.firebaseio.com",
  storageBucket: "tamal-1a86e.appspot.com"
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        MaterialModule.forRoot(),
        RouterTestingModule,
        AngularFireModule.initializeApp(firebaseAppConfig, {})
      ],
      providers: [AuthenticationService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
