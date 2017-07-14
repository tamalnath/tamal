import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    ClockComponent,
    PieChartComponent,
  ],
  exports: [
    ClockComponent,
    PieChartComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GraphicsModule { }
