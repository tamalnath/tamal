/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';

import { AppComponent } from './app.component';
import { AuthenticationService } from './authentication.service';

const firebaseAppConfig:FirebaseAppConfig = {
  apiKey: "AIzaSyCpU0fDlOIuFmryLDiFOULqsQzQYdbBe44",
  authDomain: "tamal-1a86e.firebaseapp.com",
  databaseURL: "https://tamal-1a86e.firebaseio.com",
  storageBucket: "tamal-1a86e.appspot.com"
}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [
        RouterTestingModule,
        MaterialModule.forRoot(),
        AngularFireModule.initializeApp(firebaseAppConfig, {})
      ],
      providers: [AuthenticationService],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Tamal Kanti Nath'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tamal Kanti Nath');
  }));

  it('should render title in a span tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Tamal Kanti Nath');
  }));
});
