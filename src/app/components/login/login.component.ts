import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
 
  constructor(
    public router: Router,
    public authService: AuthService,
    public navigationService: NavigationService
  ) {
  }

  public login():void{
    this.authService.login();

    this.router.navigate([this.navigationService.getLastNavigationStartUrl()]);
  }

  public unLoging():void{
    this.authService.unloging();

    this.router.navigate(['/']);
  }
}
