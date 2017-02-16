import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods, FirebaseAppConfig } from 'angularfire2';

import { AuthenticationService } from './authentication.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthenticationService],
    data: {
      title: 'Home',
      icon: 'home'
    }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthenticationService],
    data: {
      title: 'Settings',
      icon: 'settings'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About',
      icon: 'info_outline'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login',
      icon: 'lock'
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: 'HTTP 404: Not found',
      icon: 'warning'
    }
 }
];

const firebaseAppConfig:FirebaseAppConfig = {
  apiKey: "AIzaSyCpU0fDlOIuFmryLDiFOULqsQzQYdbBe44",
  authDomain: "tamal-1a86e.firebaseapp.com",
  databaseURL: "https://tamal-1a86e.firebaseio.com",
  storageBucket: "tamal-1a86e.appspot.com"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SettingsComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseAppConfig, {}, 'tamal')
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
