import { TestBed, async } from '@angular/core/testing';
import { MatCardModule, MatIconModule } from '@angular/material';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundComponent ],
      imports: [ MatCardModule, MatIconModule ]
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
