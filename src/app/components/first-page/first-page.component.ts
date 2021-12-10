import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
})
export class FirstPageComponent {
  constructor(public router: Router) {}

  public goHomePage(): void {
    this.router.navigate(['home']);
  }
}
