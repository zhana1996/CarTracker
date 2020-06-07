import { createAction, props } from '@ngrx/store';
import { IStatistic } from '../models/details';

export const getStatistics = createAction('[Statistic Page] Get Statistics');
export const getStatisticsSuccess = createAction('[Statistic Page] Get Statistics Success', props<{statistics: IStatistic[]}>());