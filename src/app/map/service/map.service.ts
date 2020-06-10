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

  getAddressFromCoords(geocoder: google.maps.Geocoder, lat: number, lng: number): Promise<any> {
    const latlng = { lat, lng };
    const promise = new Promise((resolve, reject) => {
      geocoder = new google.maps.Geocoder();

      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results[0]) {
          resolve(results[0].formatted_address);
        } else {
          reject();
        }
      });
    });

    return promise;
  }

  get locationChange(): Observable<Location> {
    return this.locationChange$.asObservable();
  }
}
