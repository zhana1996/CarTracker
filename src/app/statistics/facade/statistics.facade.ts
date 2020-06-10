import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStatistic } from '../models/details';
import { Store, select } from '@ngrx/store';
import { StatisticsState } from '../reducers/statistics.reducers';
import * as fromReducer from '../reducers/statistics.reducers';
import * as fromAction from '../actions/statistics.actions';

@Injectable()
export class StatisticsFacade {
  statistics$: Observable<IStatistic[]>;

  constructor(private store: Store<StatisticsState>) {
    this.statistics$ = this.store.pipe(select(fromReducer.getStatistics));
  }

  getStatistics(skip: number, limit: number, vehicleId: string): void {
    this.store.dispatch(fromAction.getStatistics({ skip, limit, vehicleId }));
  }

  addStatistic(statistic: IStatistic): void {
    this.store.dispatch(fromAction.addStatistic({ statistic }));
  }
}
