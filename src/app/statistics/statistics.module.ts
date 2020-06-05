import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { StatisticsPage } from './statistics.page';
import { StatisticsPageRoutingModule } from './statistics-routing.module';
import { StatisticComponent } from './components/statistic.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: StatisticsPage }]),
    StatisticsPageRoutingModule,
  ],
  declarations: [StatisticsPage, StatisticComponent]
})
export class StatisticsPageModule {}