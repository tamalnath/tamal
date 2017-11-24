import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface Point {
  x: number;
  y: number;
}

interface Number {
  point: Point;
  value: number;
}

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnChanges {

  @Input()
  private timezoneOffset: number;

  public numbers: Number[] = [];
  public hour: Point;
  public minute: Point;
  public second: Point;
  private date: Date = new Date();

  constructor() {
    for (let i: number = 1; i <= 12; i++) {
      let x: number = Math.sin(Math.PI / 6 * i);
      let y: number = - Math.cos(Math.PI / 6 * i);
      this.numbers.push({ point: { x: x, y: y }, value: i });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    let date: Date = new Date(this.date);
    if (this.timezoneOffset) {
      date = new Date(date.getTime() + this.timezoneOffset * 3600000);
    }
    let s: number = date.getUTCSeconds() + date.getUTCMilliseconds() / 1000;
    let m: number = date.getUTCMinutes() + s / 60;
    let h: number = date.getUTCHours() + m / 60;
    s = (2 * Math.PI) * (s / 60);
    m = (2 * Math.PI) * (m / 60);
    h = (2 * Math.PI) * (h / 12);
    this.second = { x: Math.sin(s), y: -Math.cos(s) };
    this.minute = { x: Math.sin(m), y: -Math.cos(m) };
    this.hour = { x: Math.sin(h), y: -Math.cos(h) };
  }

}
