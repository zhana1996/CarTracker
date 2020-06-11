import { createAction, props } from '@ngrx/store';
import { IStatistic } from '../models/details';
import { IVehicle } from 'src/app/registration/models/vehicle';

export const getStatisticsByVehicleId = createAction('[Statistic Page] Get Statistics', props<{ skip: number, limit: number, vehicleId: string }>());
export const getStatisticsByVehicleIdSuccess = createAction('[Statistic Page] Get Statistics Success', props<{ vehicle: IVehicle}>());
export const addStatistic = createAction('[Map Page] Create statistic', props<{ statistic: IStatistic }>());
export const addStatisticSuccess = createAction('[Map Page] Create statistic success', props<{ statistic: IStatistic }>());
