import { IStatistic } from '../models/details';
import {
  Action,
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromActions from '../actions/statistics.actions';
import { IVehicle } from 'src/app/registration/models/vehicle';

export interface StatisticsState {
  vehicle: IVehicle;
}

export const initialState: StatisticsState = {
  vehicle: {
    owner: null,
    carDate: null,
    carModel: null,
    carNumber: null,
    phoneNumber: null,
    statistics: []
  },
};

const featureReducer = createReducer(
  initialState,
  on(fromActions.getStatisticsByVehicleId, (state) => ({
    ...state,
  })),
  on(fromActions.getStatisticsByVehicleIdSuccess, (state, { vehicle }) => ({
    ...state,
    vehicle: {
      ...vehicle,
      statistics: [...state.vehicle.statistics, ...vehicle.statistics]
    }
  })),
  on(fromActions.addStatisticSuccess, (state, { statistic }) => ({
    ...state,
    statistics: [...state.vehicle.statistics, statistic],
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
  (state: StatisticsState) => state.vehicle
);

export function statisticsReducer(
  state: StatisticsState | undefined,
  action: Action
) {
  return featureReducer(state, action);
}
