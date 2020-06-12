import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import * as fromAction from '../actions/registration.actions';
import { RegistrationState } from '../reducers/registration.reducers';
import { IVehicle } from '../models/vehicle';

@Injectable()
export class RegistrationFacade {
    constructor(private store: Store<RegistrationState>){}

    createVehicle(vehicle: IVehicle) {
        this.store.dispatch(fromAction.setRegistration({vehicle}));
    }
}