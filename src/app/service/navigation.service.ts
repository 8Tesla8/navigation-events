import { Injectable } from '@angular/core';
import {
  Router,
  GuardsCheckEnd,
  GuardsCheckStart,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  ResolveEnd,
  ResolveStart,
  RoutesRecognized,
  RouterEvent,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _lastNavigationStartUrl = '';

  constructor(private readonly _router: Router) {}

  public startMonitoringNavigationChange(): void {
    this._router.events.subscribe((event) => {
      let url = '';

      if (event instanceof RouterEvent) {
        url = event.url;
      }

      if (event instanceof NavigationStart) {
        console.log('NavigationStart');
        this.saveUrl(url);
      }
    //  else if (event instanceof NavigationEnd) {
    //     console.log('NavigationEnd');
    //   } else if (event instanceof NavigationError) {
    //     console.log('NavigationError');
    //   } else if (event instanceof GuardsCheckStart) {
    //     console.log('GuardsCheckStart');
    //   } else if (event instanceof GuardsCheckEnd) {
    //     console.log('GuardsCheckEnd');
    //   } else if (event instanceof NavigationCancel) {
    //     console.log('NavigationCancel');
    //   } else if (event instanceof ResolveEnd) {
    //     console.log('ResolveEnd');
    //   } else if (event instanceof ResolveStart) {
    //     console.log('ResolveStart');
    //   } else if (event instanceof RoutesRecognized) {
    //     console.log('RoutesRecognized');
    //   }
    });
  }

  public getLastNavigationStartUrl(): string {
    return this._lastNavigationStartUrl;
  }

  private saveUrl(url: string): void {
    if (url.includes('login')) {
      return;
    }

    this._lastNavigationStartUrl = url;
    console.log(url);
  }
}
