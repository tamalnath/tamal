import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  version = VERSION.full;

  constructor() { }

  ngOnInit() {
  }

}
