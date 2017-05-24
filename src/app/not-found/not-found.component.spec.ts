import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundComponent ],
      imports: [ MaterialModule ]
    });
    TestBed.compileComponents();
  }));

  it('should be created', () => {
    const fixture = TestBed.createComponent(NotFoundComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
