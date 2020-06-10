import { Action, createReducer, on, createFeatureSelector } from '@ngrx/store';
import * as fromActions from '../actions/registration.actions';

export interface RegistrationState {
    response: string;
}

export const initialState: RegistrationState = {
    response: ''
}

const featureReducer = createReducer (
    initialState,
    on (fromActions.setRegistration, state => ({
        ...state
    })),
    on (fromActions.setRegistrationSuccess, (state, {response} )=> ({
        ...state,
        response: response
    }))
);

export interface State {
    registration: RegistrationState
}

export const getRegistrationState = createFeatureSelector<RegistrationState>('registration');

export function registrationReducer (state: RegistrationState | undefined, action: Action) {
    return featureReducer(state, action);
}