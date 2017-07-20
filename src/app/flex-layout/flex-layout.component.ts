import { Component } from '@angular/core';

@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.css']
})
export class FlexLayoutComponent {

  fxLayoutArray: string[] = [ 'row', 'column', 'row-reverse', 'column-reverse' ];
  fxLayout: string = 'row';

  mainAxisArray: string[] = [ 'start', 'center', 'end', 'space-around', 'space-between' ];
  mainAxis: string = 'start';

  crossAxisArray: string[] = [ 'start', 'center', 'end', 'stretch' ];
  crossAxis: string = 'start';

}
