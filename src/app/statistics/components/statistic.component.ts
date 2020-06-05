import { Component, Input, OnInit } from "@angular/core";
import { IDetails } from '../models/details';

@Component({
    selector: 'app-statistic',
    templateUrl: 'statistic.component.html'
})

export class StatisticComponent implements OnInit {
    @Input() detail: IDetails;
    constructor() {}

    ngOnInit() {}
}