import { Component } from '@angular/core';
import { IStatistic } from './models/details';
import { Observable } from 'rxjs';
import { StatisticsFacade } from './facade/statistics.facade';
import { IVehicle } from '../registration/models/vehicle';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
    selector: 'app-statistics',
    templateUrl: 'statistics.page.html'
})

export class StatisticsPage {
    public skip = 0;
    public limit = 2;
    public statistics$: Observable<IVehicle> = this.facade.statistics$;

    constructor(private facade: StatisticsFacade,
                private storageService: LocalStorageService) {}

    ionViewWillEnter(): void {
        this.facade.getStatistics(this.skip, this.limit, this.storageService.vehicle._id);
    }

    loadMore() {
        this.skip += 2;
        this.facade.getStatistics(this.skip, this.limit, this.storageService.vehicle._id);
    }
}
