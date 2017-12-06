import { TestBed, async } from '@angular/core/testing';
import { MatCardModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../../environments/environment';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../authentication.service';

describe('LoginComponent', () => {

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        MatCardModule,
        MatIconModule,
        MatProgressSpinnerModule,
        RouterTestingModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase)
      ],
      providers: [AuthenticationService],
    });
    TestBed.compileComponents();
  }));

  it('should be created', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
