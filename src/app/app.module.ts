import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { HomePageComponent } from './components/home-page/home.component';
import { LoginComponent } from './components/login/login.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './service/auth.service';

import { NavigationService } from './service/navigation.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    FirstPageComponent,
    SecondPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    NavigationService,
    AuthService,

    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
