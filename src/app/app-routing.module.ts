import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommonComponent } from './common/common.component';
import { SudokuComponent } from './sudoku/sudoku.component';

const routes: Routes = [
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
    canActivate: [AuthenticationService],
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
      icon: 'pie_chart'
    }
  },
  {
    path: 'common',
    component: CommonComponent,
    canActivate: [AuthenticationService],
    data: {
      title: 'Common Module',
      icon: 'code'
    }
  },
  {
    path: 'sudoku',
    component: SudokuComponent,
    canActivate: [AuthenticationService],
    data: {
      title: 'Sudoku',
      icon: 'grid_on'
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
