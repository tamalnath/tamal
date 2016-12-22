import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Tamal Kanti Nath";
  icon = "face";

  constructor(private titleService:Title, private router:Router, private authenticationService: AuthenticationService) {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        let data = router.routerState.root.snapshot.firstChild.data;
        this.title = data['title'];
        this.icon = data['icon'];
        titleService.setTitle(data['title']);
      }
    });
  }

}
