import { Action, createReducer, on, createFeatureSelector } from '@ngrx/store';
import * as fromActions from '../actions/login.actions';
import { IVehicle } from 'src/app/registration/models/vehicle';

export interface LoginState {
    vehicle: IVehicle;
}

export const initialState: LoginState = {
    vehicle: null
}

const featureReducer = createReducer (
    initialState,
    on (fromActions.loginVehicle, state => ({
        ...state
    })),
    on (fromActions.loginVehicleSuccess, (state, {vehicle} )=> ({
        ...state,
        vehicle
    }))
);

export interface State {
    login: LoginState
}

export const getLoginState = createFeatureSelector<LoginState>('login');

export function loginReducer (state: LoginState | undefined, action: Action) {
    return featureReducer(state, action);
}