import { createAction, props } from '@ngrx/store';
import { IVehicle } from 'src/app/registration/models/vehicle';

export const getVehicle = createAction('[Login Page] Get Vehicle', props<{number: string}>());
export const getVehicleSuccess = createAction('[Login Page] Get Vehicle Success', props<{vehicle: IVehicle}>());