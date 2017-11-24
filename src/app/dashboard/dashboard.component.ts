import { Component } from '@angular/core';
import { Pie } from 'graphics/pie-chart/pie-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  timezone: number = undefined;
  pieChart: Pie[] = [
    { name: 'expense', value: 14000, children: [
      { name: 'rent', value: 7000 },
      { name: 'groceries', value: 5000 },
      { name: 'transport', value: 2000 },
    ] },
    { name: 'debt', value: 5000, color: 'red', children: [
      { name: 'car loan', value: 4000 },
      { name: 'credit card', value: 1000 },
    ] },
    { name: 'investment', value: 9000, color: 'green', children: [
      { name: 'fixed deposit', value: 3000 },
      { name: 'share', value: 4000 },
      { name: 'mutual fund', value: 2000 },
    ] },
  ];
}
