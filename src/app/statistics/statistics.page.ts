import { Component } from '@angular/core';
import { IStatistic } from './models/details';
import { Observable } from 'rxjs';
import { StatisticsFacade } from './facade/statistics.facade';
import { IVehicle } from '../registration/models/vehicle';

@Component({
    selector: 'app-statistics',
    templateUrl: 'statistics.page.html'
})

export class StatisticsPage {
    public skip = 0;
    public limit = 2;
    public statistics$: Observable<IVehicle> = this.facade.statistics$;

    constructor(private facade: StatisticsFacade) {}

    ionViewWillEnter(): void {
        this.facade.getStatistics(this.skip, this.limit, '5ee00ff0be49c8442c23880b');
    }

    loadMore() {
        this.skip += 2;
        this.facade.getStatistics(this.skip, this.limit, '5ee00ff0be49c8442c23880b');
    }
}
