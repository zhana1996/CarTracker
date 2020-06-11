import { Component, NgZone } from '@angular/core';
import { Location } from 'cordova-background-geolocation-lt';
import { MapService } from './service/map.service';
import { Platform } from '@ionic/angular';
import { Subject } from 'rxjs';
import { StatisticsFacade } from '../statistics/facade/statistics.facade';
import { IStatistic } from '../statistics/models/details';
import { PusherService } from './service/pusher.service';

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss'],
})
export class MapPage {
  private readonly destroyed$ = new Subject<void>();
  private distanceCounter = 200;

  readonly MAX_SPEED = 40;
  readonly options: google.maps.MapOptions = {
    fullscreenControl: false,
    center: { lat: 37.421995, lng: -122.084092 },
    zoom: 17,
  };

  speed = 0;
  center: google.maps.LatLng;
  markerPosition: google.maps.LatLng;
  markerOptions: google.maps.MarkerOptions = {
    animation: google.maps.Animation.DROP
  };
  polylinePath: Array<google.maps.LatLng> = [];

  constructor(
    private zone: NgZone,
    private mapService: MapService,
    private platform: Platform,
    private statisticFacade: StatisticsFacade,
    private pusherService: PusherService,
  ) {}

  ionViewWillEnter(): void {
    const channel = this.pusherService.init();

    channel.bind(
      'vehicle_location',
      async (data) => {
        const location: Location = data.location;
        console.log(data);
        await this.updateLocation(location);
    });
    if (this.platform.is('cordova')) {
      this.mapService.initBackgroundLocation();
    } else {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        this.center = this.markerPosition = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
      });
    }
  }

  private calculateDistance(latlng: Array<google.maps.LatLng>): number {
    const distance = google.maps.geometry.spherical.computeLength(latlng);

    return distance;
  }

  private async updateLocation(location: any): Promise<void> {
    const coords = location.coords;
    if (coords.speed > 0) {
      this.speed = Math.round(coords.speed * 3.6);
    }
    this.center = this.markerPosition = new google.maps.LatLng(
      coords.latitude,
      coords.longitude
    );

    this.polylinePath.push(this.center);
    this.polylinePath = this.polylinePath.slice();

    const distance = this.calculateDistance(this.polylinePath);

    // TODO - Add GeocodeService to google free plan and uncomment
    // const geocoder = new google.maps.Geocoder();

    // const address = await this.mapService.getAddressFromCoords(geocoder, coords.latitude, coords.longitude);

    if (distance > this.distanceCounter) {
      this.distanceCounter += 200;
      if (this.speed > this.MAX_SPEED) {
        const statistic: IStatistic = {
          vehicle: '5edfea80a6850828f8720d01',
          date: new Date(),
          address: 'test zasega',
          overspeed: 200,
        };
        this.statisticFacade.addStatistic(statistic);
      }
    }
  }

  ionViewWillLeave(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
