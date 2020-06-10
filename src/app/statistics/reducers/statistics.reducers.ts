import { IStatistic } from '../models/details';
import {
  Action,
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromActions from '../actions/statistics.actions';

export interface StatisticsState {
  statistics: IStatistic[];
}

export const initialState: StatisticsState = {
  statistics: [],
};

const featureReducer = createReducer(
  initialState,
  on(fromActions.getStatistics, (state) => ({
    ...state,
  })),
  on(fromActions.getStatisticsSuccess, (state, { statistics }) => ({
    ...state,
    statistics: [...state.statistics, ...statistics],
  })),
  on(fromActions.addStatisticSuccess, (state, { statistic }) => ({
    ...state,
    statistics: [...state.statistics, statistic],
  }))
);

export interface State {
  statistics: StatisticsState;
}

export const getStatisticsState = createFeatureSelector<StatisticsState>(
  'statistics'
);
export const getStatistics = createSelector(
  getStatisticsState,
  (state: StatisticsState) => state.statistics
);

export function statisticsReducer(
  state: StatisticsState | undefined,
  action: Action
) {
  return featureReducer(state, action);
}
