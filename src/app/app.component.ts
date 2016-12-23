import { Component } from '@angular/core';
import { Title, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Tamal Kanti Nath";
  icon = "face";

  constructor(private titleService:Title,
    private mdIconRegistry: MdIconRegistry,
    private sanitizer: DomSanitizer,
    private router:Router,
    private authenticationService: AuthenticationService) {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        let data = router.routerState.root.snapshot.firstChild.data;
        this.title = data['title'];
        this.icon = data['icon'];
        titleService.setTitle(data['title']);
      }
    });
    let svg: SafeResourceUrl = sanitizer.bypassSecurityTrustResourceUrl('/assets/company.svg');
    mdIconRegistry.addSvgIconSetInNamespace('company', svg);
  }

}
