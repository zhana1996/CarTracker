import { Component, OnInit } from "@angular/core";
import { IDetails } from './models/details';
import { StatisticsService } from './statistics.service';

@Component({
    selector: 'app-statistics',
    templateUrl: 'statistics.page.html'
})

export class StatisticsPage implements OnInit{
    public isLoadMore = false;
    public details: Array<IDetails>;
    public details2: Array<IDetails>;
    public detailsOther: Array<IDetails>;
    constructor(private service: StatisticsService) {}

    ngOnInit() {
        this.details = this.service.getDetails();
        if (this.details.length > 0) {
        this.details2 = this.details.slice(0,2);
        this.detailsOther = this.details.slice(2);
        }
    }

    loadMore() {
        this.isLoadMore = true;
    }
}