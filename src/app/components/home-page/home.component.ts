import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
})
export class HomePageComponent {
  constructor(public router: Router) {}

  public goTo(pageName: string): void {
    this.router.navigate([pageName]);
  }
}
