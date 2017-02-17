import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ MaterialModule ]
    });
    TestBed.compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const componentInstance = fixture.debugElement.componentInstance;
    expect(componentInstance).toBeTruthy();
  });
});
