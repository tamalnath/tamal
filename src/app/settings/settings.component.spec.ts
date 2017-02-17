import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      imports: [ MaterialModule ],
    });
    TestBed.compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(SettingsComponent);
    fixture.detectChanges();
    const componentInstance = fixture.debugElement.componentInstance;
    expect(componentInstance).toBeTruthy();
  });
});
