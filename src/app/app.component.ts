import { Component } from '@angular/core';
import { NavigationService } from './service/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly _navigationService: NavigationService) {
    this._navigationService.startMonitoringNavigationChange();
  }
}
