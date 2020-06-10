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
    on (fromActions.getVehicle, state => ({
        ...state
    })),
    on (fromActions.getVehicleSuccess, (state, {vehicle} )=> ({
        ...state,
        vehicle: vehicle
    }))
);

export interface State {
    login: LoginState
}

export const getLoginState = createFeatureSelector<LoginState>('login');

export function loginReducer (state: LoginState | undefined, action: Action) {
    return featureReducer(state, action);
}