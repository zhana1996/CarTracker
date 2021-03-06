import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import * as fromAction from '../actions/login.actions';
import { LoginState } from '../reducers/login.reducers';

@Injectable()
export class LoginFacade {
    constructor(private store: Store<LoginState>){}

    loginVehicle(carNumber: string) {
        this.store.dispatch(fromAction.loginVehicle({carNumber}));
    }
}