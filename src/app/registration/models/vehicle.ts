import { IStatistic } from 'src/app/statistics/models/details';

export interface IVehicle {
    _id?: string;
    owner: string;
    carDate: Date;
    carModel: string;
    carNumber: string;
    phoneNumber: string;
    statistics?: IStatistic[];
}