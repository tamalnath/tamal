import { TestBed, async } from '@angular/core/testing';
import { MatCardModule, MatIconModule } from '@angular/material';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ MatCardModule, MatIconModule ]
    });
    TestBed.compileComponents();
  }));

  it('should be created', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const componentInstance = fixture.debugElement.componentInstance;
    expect(componentInstance).toBeTruthy();
  });
});
