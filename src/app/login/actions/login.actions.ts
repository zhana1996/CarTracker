import { createAction, props } from '@ngrx/store';
import { IVehicle } from 'src/app/registration/models/vehicle';

export const loginVehicle = createAction('[Login Page] Login Vehicle', props<{carNumber: string}>());
export const loginVehicleSuccess = createAction('[Login Page] Login Vehicle Success', props<{vehicle: IVehicle}>());
export const loginVehicleError = createAction('[Login Page] Login Vehicle Error', (error: Error) => (error));