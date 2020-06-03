import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage {
  public options: google.maps.MapOptions = {
    fullscreenControl: false,
    center: {lat: 37.421995, lng: -122.084092},
    zoom: 17
  };

  constructor() {}

}
