import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MapPageRoutingModule } from './map-routing.module';
import { MapPage } from './map.page';

import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GoogleMapsModule,
    MapPageRoutingModule
  ],
  declarations: [MapPage]
})
export class MapPageModule {}