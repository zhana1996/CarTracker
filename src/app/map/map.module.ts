import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MapPageRoutingModule } from './map-routing.module';
import { MapPage } from './map.page';

import { GoogleMapsModule } from '@angular/google-maps';
import { MapService } from './service/map.service';
import { StatisticsPageModule } from '../statistics/statistics.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GoogleMapsModule,
    MapPageRoutingModule,
    StatisticsPageModule
  ],
  declarations: [MapPage],
  providers: [MapService]
})
export class MapPageModule {}
