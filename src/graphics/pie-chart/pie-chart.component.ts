import { Component, OnChanges, Input } from '@angular/core';

export interface PieChartData {
  name: string,
  value: number,
  color?: string,
  children?: PieChartData[],
}

interface Path {
  name: string,
  value: number,
  color: string,
  d: string
}

interface Point {
  x: number;
  y: number;
}

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnChanges {

  @Input()
  private data: PieChartData[];
  public paths: Path[];

  ngOnChanges(): void {
    this.draw();
  }

  private draw(): void {
    let maxDepth = this.getDepth(this.data);
    this.paths = this.getPaths(this.data, 0, Math.PI * 2, 1, maxDepth);
  }

  private getDepth(data: PieChartData[], depth: number = 1): number {
    return data.map(item => item.children ? this.getDepth(item.children, depth + 1) : depth).reduce((a, b) => Math.max(a, b), depth);
  }

  private getPaths(data: PieChartData[], startAngle: number, endAngle: number, depth: number, maxDepth: number) : Path[] {
    let paths: Path[] = [];
    let total: number = data.map(item => item.value).reduce((a, b) => a + b, 0);
    let sa: number = startAngle;
    data.forEach(item => {
      let ea: number = sa + (endAngle - startAngle) * (item.value / total);
      let ir: number = Math.sqrt((depth - 1) / maxDepth);
      let or: number = Math.sqrt(depth / maxDepth);
      let d: string = this.getPath(sa, ea, ir, or);
      paths.push({
        name: item.name,
        value: item.value,
        color: item.color ? item.color : this.getRandomColor(),
        d: d
      });
      if (item.children) {
        paths = paths.concat(this.getPaths(item.children, sa, ea, depth + 1, maxDepth));
      }
      sa = ea;
    });
    return paths;
  }

  private getPath(startAngle: number, endAngle: number, innerRadius: number, outerRadius: number): string {
    // y is negated as y value decreases in top and increases in the bottom
    let innerStart: Point = { x: innerRadius * Math.cos(startAngle), y: - innerRadius * Math.sin(startAngle) };
    let innerEnd: Point = { x: innerRadius * Math.cos(endAngle), y: - innerRadius * Math.sin(endAngle) };
    let outerStart: Point = { x: outerRadius * Math.cos(startAngle), y: - outerRadius * Math.sin(startAngle) };
    let outerEnd: Point = { x: outerRadius * Math.cos(endAngle), y: - outerRadius * Math.sin(endAngle) };
    // largeArc is 0 if angle is less than 180 degree and 1 if angle is more than 180 degree
    let largeArc: number = (endAngle - startAngle) < Math.PI ? 0 : 1;
    let move: string = "M " + innerStart.x + "," + innerStart.y;
    let lineOut: string = " L " + outerStart.x + "," + outerStart.y;
    // sweep-flag is 0 for clockwise rotation
    let arcOut: string = " A " + outerRadius + "," + outerRadius + " 0 " + largeArc + " 0 " + outerEnd.x + "," + outerEnd.y;
    let lineIn: string = " L " + innerEnd.x + "," + innerEnd.y;
    // sweep-flag is 1 for anti-clockwise rotation
    let arcIn: string = " A " + innerRadius + "," + innerRadius + " 0 " + largeArc + " 1 " + innerStart.x + "," + innerStart.y;
    return move + lineOut + arcOut + lineIn + arcIn + " Z";
  }

  private getRandomColor(): string {
    return "#" + Math.round(Math.random() * 0xFFFFFF).toString(16);
  }

}
