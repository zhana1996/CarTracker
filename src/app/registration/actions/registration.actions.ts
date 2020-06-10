import { createAction, props } from '@ngrx/store';
import { IVehicle } from '../models/vehicle';

export const setRegistration = createAction('[Registration Page] Set Registration', props<{vehicle: IVehicle}>());
export const setRegistrationSuccess = createAction('[Registration Page] Set Registration Success', props<{response: string}>());