import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { HomePageComponent } from './components/home-page/home.component';
import { LoginComponent } from './components/login/login.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'first-page',
    canActivate: [AuthGuard],
    component: FirstPageComponent,
  },
  {
    path: 'second-page',
    canActivate: [AuthGuard],
    component: SecondPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
