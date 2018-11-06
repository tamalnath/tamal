import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  company: string = 'none';
  companies: string[] = ['facebook', 'github', 'google', 'linkedin', 'twitter'];

  constructor() { }

  ngOnInit() {
  }

}
