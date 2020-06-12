import { IVehicle } from 'src/app/registration/models/vehicle';

export interface IStatistic {
     _id?: string;
     date: Date;
     address: string;
     overspeed: number;
     vehicle?: string;
}
