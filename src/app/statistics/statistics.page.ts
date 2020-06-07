import { Component, OnInit } from "@angular/core";
import { IStatistic } from './models/details';
import { Observable } from 'rxjs';
import { StatisticsFacade } from './facade/statistics.facade';

@Component({
    selector: 'app-statistics',
    templateUrl: 'statistics.page.html'
})

export class StatisticsPage implements OnInit{
    public statistics$: Observable<IStatistic[]> = this.facade.statistics$;

    constructor(private facade: StatisticsFacade) {}

    ngOnInit(): void {
        this.facade.getStatistics();
    }
}