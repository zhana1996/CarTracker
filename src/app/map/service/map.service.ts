import { Injectable } from '@angular/core';
import BackgroundGeolocation, { Location, State } from 'cordova-background-geolocation-lt';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class MapService {
  private locationChange$ = new BehaviorSubject<Location>(null);

  initBackgroundLocation(): void {
    BackgroundGeolocation.ready({
      reset: false,
      debug: true,
      logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
      distanceFilter: 10,
      autoSync: true,
      stopOnTerminate: true,
      startOnBoot: true,
    }, () => BackgroundGeolocation.start());

    BackgroundGeolocation.onLocation((location) => this.locationChange$.next(location));
  }

  get locationChange(): Observable<Location> {
    return this.locationChange$.asObservable();
  }
}
