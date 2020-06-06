import { Component, NgZone } from '@angular/core';
import { Location } from 'cordova-background-geolocation-lt';
import { MapService } from './service/map.service';
import { Platform } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss'],
})
export class MapPage {
  private readonly destroyed$ = new Subject<void>();

  readonly MAX_SPEED = 2;

  options: google.maps.MapOptions = {
    fullscreenControl: false,
    center: { lat: 37.421995, lng: -122.084092 },
    zoom: 17,
  };

  speed = 0;
  center: google.maps.LatLngLiteral;
  markerPosition: google.maps.LatLngLiteral;
  markerOptions: google.maps.MarkerOptions = {
    animation: google.maps.Animation.DROP,
  };
  polylinePath: Array<google.maps.LatLngLiteral> = [];

  constructor(
    private zone: NgZone,
    private mapService: MapService,
    private platform: Platform
  ) {}

  ionViewWillEnter(): void {
    if (this.platform.is('cordova')) {
      this.mapService.initBackgroundLocation();
      this.mapService.locationChange
        .pipe(takeUntil(this.destroyed$))
        .subscribe((location: Location) => {
          if (location?.coords) {
            this.zone.run(() => {
              this.updateLocation(location);
            });
          }
        });
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = this.markerPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    }
  }

  private updateLocation(location: Location): void {
    const coords = location?.coords;
    if (coords.speed > 0) {
      this.speed = Math.round(coords.speed * 3.6);
    }
    this.center = this.markerPosition = {
      lat: coords.latitude,
      lng: coords.longitude,
    };
    this.polylinePath.push(this.center);
    this.polylinePath = this.polylinePath.slice();
  }

  ionViewWillLeave(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
