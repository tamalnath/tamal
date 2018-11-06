import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule, MatListModule, MatProgressSpinnerModule, MatRadioModule, MatSidenavModule, MatSliderModule, MatToolbarModule } from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { GraphicsModule } from '../graphics/graphics.module';

import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './authentication.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonComponent } from './common/common.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    DashboardComponent,
    CommonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSidenavModule,
    MatSliderModule,
    MatToolbarModule,

    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,

    GraphicsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
