import { Component } from '@angular/core';
import { IStatistic } from './models/details';
import { Observable } from 'rxjs';
import { StatisticsFacade } from './facade/statistics.facade';

@Component({
    selector: 'app-statistics',
    templateUrl: 'statistics.page.html'
})

export class StatisticsPage {
    public skip = 0;
    public limit = 2;
    public statistics$: Observable<IStatistic[]> = this.facade.statistics$;

    constructor(private facade: StatisticsFacade) {}

    ionViewWillEnter(): void {
        this.facade.getStatistics(this.skip, this.limit, '5edfea80a6850828f8720d01');
    }

    loadMore() {
        this.skip += 2;
        this.facade.getStatistics(this.skip, this.limit, '5edfea80a6850828f8720d01');
    }
}
