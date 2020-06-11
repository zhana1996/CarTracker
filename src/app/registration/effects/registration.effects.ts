import { Action } from "@ngrx/store";
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/registration.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

class EffectError implements Action {
    readonly type = '[Error] Effect Error Registration';
}

@Injectable()
export class RegistrationEffect {
    constructor(private actions$: Actions,
                private service: RegistrationService,
                private router: Router) {}
    
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

    successRegistration$ = createEffect ( () =>
        this.actions$.pipe(
            ofType(fromActions.setRegistrationSuccess),
            tap(() => this.router.navigateByUrl('/login'))
        ),{dispatch: false});
}