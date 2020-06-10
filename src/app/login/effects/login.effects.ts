import { Action } from "@ngrx/store";
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/login.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoginService } from '../login.service';
import { IVehicle } from 'src/app/registration/models/vehicle';

class EffectError implements Action {
    readonly type = '[Error] Effect Error Login';
}

@Injectable()
export class LoginEffect {
    constructor(private actions$: Actions,
                private service: LoginService) {}
    
    getVehicle$ = createEffect (() => 
    this.actions$.pipe(
        ofType(fromActions.getVehicle),
        switchMap(({number}) =>
            this.service.getVehicle(number).pipe(
                map((vehicle: IVehicle) => fromActions.getVehicleSuccess({vehicle})),
                catchError(() => of(new EffectError()))
            ))
        )
    );
}