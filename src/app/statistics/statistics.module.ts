import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StatisticsPage } from './statistics.page';
import { StatisticsPageRoutingModule } from './statistics-routing.module';
import { StatisticComponent } from './components/statistic.component';
import { StoreModule } from '@ngrx/store';
import { statisticsReducer } from './reducers/statistics.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StatisticsEffects } from './effects/statistics.effects';
import { StatisticsService } from './statistics.service';
import { StatisticsFacade } from './facade/statistics.facade';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StoreModule.forFeature('statistics', statisticsReducer),
    EffectsModule.forFeature([StatisticsEffects]),
    RouterModule.forChild([{ path: '', component: StatisticsPage }]),
    StatisticsPageRoutingModule,
  ],
  declarations: [StatisticsPage, StatisticComponent],
  providers: [StatisticsService, StatisticsFacade]
})
export class StatisticsPageModule {}
