import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { NavigationService } from '../service/navigation.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    public router: Router,
    public authService: AuthService,
    public navigationService: NavigationService
  ) {}

  async canActivate() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
