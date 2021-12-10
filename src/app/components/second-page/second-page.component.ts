import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
})
export class SecondPageComponent {
  constructor(public router: Router) {}

  public goHomePage(): void {
    this.router.navigate(['home']);
  }
}
