import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { GraphicsModule } from '../graphics/graphics.module';

import { AuthenticationService } from './authentication.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';

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
    path: 'dashboard',
    // canActivate: [AuthenticationService],
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
      icon: 'pie_chart'
    }
  },
  {
    path: 'flex-layout',
    // canActivate: [AuthenticationService],
    component: FlexLayoutComponent,
    data: {
      title: 'Flex Layout',
      icon: 'view_column'
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    DashboardComponent,
    FlexLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,

    GraphicsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
