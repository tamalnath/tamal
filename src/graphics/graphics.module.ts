import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [
    ClockComponent
  ],
  exports: [
    ClockComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GraphicsModule { }
