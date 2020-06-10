import { Action } from "@ngrx/store";
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/registration.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { RegistrationService } from '../registration.service';

class EffectError implements Action {
    readonly type = '[Error] Effect Error Registration';
}

@Injectable()
export class RegistrationEffect {
    constructor(private actions$: Actions,
                private service: RegistrationService) {}
    
    setVehicleRegistration = createEffect (() => 
    this.actions$.pipe(
        ofType(fromActions.setRegistration),
        switchMap(({vehicle}) =>
            this.service.createVehicle(vehicle).pipe(
                map((response: string) => fromActions.setRegistrationSuccess({response})),
                catchError(() => of(new EffectError()))
            ))
        )
    );
}