import { Action } from "@ngrx/store";
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StatisticsService } from '../statistics.service';
import * as fromActions from '../actions/statistics.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { IStatistic } from '../models/details';
import { of } from 'rxjs';

class EffectError implements Action {
    readonly type = '[Error] Effect Error Statistics';
}

@Injectable()
export class StatisticsEffects {
    constructor(private actions$: Actions,
                private service: StatisticsService) {}
    
    getStatistics = createEffect (() => 
    this.actions$.pipe(
        ofType(fromActions.getStatistics),
        switchMap(({skip, limit}) =>
            this.service.getAll(skip, limit).pipe(
                map((statistics: IStatistic[]) => fromActions.getStatisticsSuccess({statistics})),
                catchError(() => of(new EffectError()))
            ))
    ));
}