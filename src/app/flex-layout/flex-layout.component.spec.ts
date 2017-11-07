import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatRadioModule, MatSliderModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { FlexLayoutComponent } from './flex-layout.component';

describe('FlexLayoutComponent', () => {
  let component: FlexLayoutComponent;
  let fixture: ComponentFixture<FlexLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexLayoutComponent ],
      imports: [ FormsModule, MatCardModule, MatRadioModule, MatSliderModule, FlexLayoutModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
