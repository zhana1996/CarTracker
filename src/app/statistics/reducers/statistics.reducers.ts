import { IStatistic } from '../models/details';
import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/statistics.actions';

export interface StatisticsState {
    statistics: IStatistic [];
}

export const initialState: StatisticsState = {
    statistics: null
}

const featureReducer = createReducer (
    initialState,
    on (fromActions.getStatistics, state => ({
        ...state,
        statistics: null
    })),
    on (fromActions.getStatisticsSuccess, (state, {statistics} )=> ({
        ...state,
        statistics
    }))
);

export interface State {
    'statistics': StatisticsState
}

export const getStatisticsState = createFeatureSelector<StatisticsState>('statistics');
export const getStatistics = createSelector(getStatisticsState, (state: StatisticsState) => state.statistics);

export function statisticsReducer (state: StatisticsState | undefined, action: Action) {
    return featureReducer(state, action);
}