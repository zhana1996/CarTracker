import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpeedPage } from './speed.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SpeedPageRoutingModule } from './speed-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: SpeedPage }]),
    SpeedPageRoutingModule,
  ],
  declarations: [SpeedPage]
})
export class SpeedPageModule {}
