import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      imports: [ MaterialModule ],
    });
    TestBed.compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const componentInstance = fixture.debugElement.componentInstance;
    expect(componentInstance).toBeTruthy();
  });
});
