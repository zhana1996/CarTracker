import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStatistic } from '../models/details';
import { Store, select } from '@ngrx/store';
import { StatisticsState } from '../reducers/statistics.reducers';
import * as fromReducer from '../reducers/statistics.reducers';
import * as fromAction from '../actions/statistics.actions';
import { IVehicle } from 'src/app/registration/models/vehicle';

@Injectable()
export class StatisticsFacade {
  statistics$: Observable<IVehicle>;

  constructor(private store: Store<StatisticsState>) {
    this.statistics$ = this.store.pipe(select(fromReducer.getStatistics));
  }

  getStatistics(skip: number, limit: number, vehicleId: string): void {
    this.store.dispatch(fromAction.getStatisticsByVehicleId({ skip, limit, vehicleId }));
  }

  addStatistic(statistic: IStatistic): void {
    this.store.dispatch(fromAction.addStatistic({ statistic }));
  }
}
