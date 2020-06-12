import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/login.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { LoginService } from '../login.service';
import { IVehicle } from 'src/app/registration/models/vehicle';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable()
export class LoginEffect {
    constructor(private actions$: Actions,
                private service: LoginService,
                private router: Router,
                private toaster: ToastController,
                private storageService: LocalStorageService) {}
    
    loginVehicle$ = createEffect(() => 
    this.actions$.pipe(
        ofType(fromActions.loginVehicle),
        switchMap(({carNumber}) =>
            this.service.loginVehicle(carNumber).pipe(
                map((vehicle: IVehicle) => fromActions.loginVehicleSuccess({vehicle})),
                catchError(({error}) => [fromActions.loginVehicleError(error)])
            ))
        )
    );

    loginVehicleSuccess$ = createEffect(()=>
        this.actions$.pipe(
            ofType(fromActions.loginVehicleSuccess),
            tap(({vehicle})=> {
                this.router.navigateByUrl('/tabs');
                this.storageService.vehicle = vehicle;
            })),
        {dispatch: false}
    );

    loginVehicleError$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.loginVehicleError),
            tap((error)=> this.viewToaster(error.message))),
        {dispatch: false}
    );

    private async viewToaster(message: string): Promise<void> {
        const toaster = await this.toaster.create({
            message,
            duration: 2000,
            color: 'danger'
        });
        return await toaster.present();
    }
}