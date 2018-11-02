import { Component } from '@angular/core';
import { PieChartData } from '../../graphics/pie-chart/pie-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  timezone: number = undefined;
  pieChart: PieChartData[] = [
    { name: 'Red', value: 3, color: 'red', children: [
      { name: 'Orange', value: 1, color: 'orange' },
      { name: 'Pink', value: 2, color: 'pink' },
    ]  },
    { name: 'Green', value: 2, color: 'green'},
    { name: 'Blue', value: 1, color: 'blue'}
  ];

  set pieChartString(data: string) {
    try {
      this.pieChart = this.parsePieChartData(JSON.parse(data));
    } catch (e) {
      console.log(e);
    }
  }

  get pieChartString() : string {
    return JSON.stringify(this.pieChart, null, 4);
  }

  private parsePieChartData(json: any): PieChartData[] {
    let data: PieChartData[] = [];
    if (json instanceof Array) {
      for (var item of json) {
        data.push({
          name: item["name"],
          value: item["value"],
          color: item["color"],
          children: this.parsePieChartData(item["children"]),
        });
      }
    } else {
      for(var key in json) {
        data.push({
          name: key,
          value: json[key]
        });
      }
    }
    return data;
  }
}
