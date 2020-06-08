import { createAction, props } from '@ngrx/store';
import { IStatistic } from '../models/details';

export const getStatistics = createAction('[Statistic Page] Get Statistics', props<{skip: number, limit: number}>());
export const getStatisticsSuccess = createAction('[Statistic Page] Get Statistics Success', props<{statistics: IStatistic[]}>());