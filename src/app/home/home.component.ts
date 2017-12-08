import { Component, VERSION as ANGULAR_VERSION } from '@angular/core';
import { VERSION as MATERIAL_VERSION } from '@angular/material';
import { SDK_VERSION as FIREBASE_VERSION } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  angular = ANGULAR_VERSION.full;
  material = MATERIAL_VERSION.full;
  firebase = FIREBASE_VERSION;

}
