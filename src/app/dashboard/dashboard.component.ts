import { Component } from '@angular/core';
import { Pie } from 'graphics/pie-chart/pie-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  pieChart: Pie[] = [
    { name: 'red', value: 1, color: 'red', children: [
      { name: 'orange', value: 1, color: 'orange' },
      { name: 'pink', value: 2, color: 'pink' },
    ] },
    { name: 'green', value: 2, color: 'green' },
    { name: 'blue', value: 3, color: 'blue' },
  ];
}
