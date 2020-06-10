import { createAction, props } from '@ngrx/store';
import { IStatistic } from '../models/details';

export const getStatistics = createAction('[Statistic Page] Get Statistics', props<{ skip: number, limit: number, vehicleId: string }>());
export const getStatisticsSuccess = createAction('[Statistic Page] Get Statistics Success', props<{ statistics: IStatistic[] }>());
export const addStatistic = createAction('[Map Page] Create statistic', props<{ statistic: IStatistic }>());
export const addStatisticSuccess = createAction('[Map Page] Create statistic success', props<{ statistic: IStatistic }>());
