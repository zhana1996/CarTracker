import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StatisticsService } from '../statistics.service';
import * as fromActions from '../actions/statistics.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { IStatistic } from '../models/details';
import { of } from 'rxjs';
import { IVehicle } from 'src/app/registration/models/vehicle';

class EffectError implements Action {
  readonly type = '[Error] Effect Error Statistics';
}

@Injectable()
export class StatisticsEffects {
  constructor(private actions$: Actions, private service: StatisticsService) {}

  getStatistics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getStatisticsByVehicleId),
      switchMap(({ skip, limit, vehicleId }) =>
        this.service.getAllByVehicleId(skip, limit, vehicleId).pipe(
          map((vehicle: IVehicle) =>
            fromActions.getStatisticsByVehicleIdSuccess({ vehicle })
          ),
          catchError(() => of(new EffectError()))
        )
      )
    )
  );

  createStatistic$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addStatistic),
      switchMap(({ statistic }) =>
        this.service.createStatistic(statistic).pipe(
          map((statistic: IStatistic) =>
            fromActions.addStatisticSuccess({ statistic })
          ),
          catchError(() => of(new EffectError()))
        )
      )
    )
  );
}
