import { Component, Input } from "@angular/core";
import { IStatistic } from '../models/details';
import { IVehicle } from 'src/app/registration/models/vehicle';

@Component({
    selector: 'app-statistic',
    templateUrl: 'statistic.component.html'
})

export class StatisticComponent {
    @Input() statistic: IStatistic;
}