import { Injectable } from "@angular/core";
import { IDetails } from './models/details';

@Injectable({
    providedIn: 'root'
})
export class StatisticsService {
    public details: Array<IDetails> = [
        { date: new Date (2010, 11, 3, 15), speed: 25, place:'Sofia, Montevideo 14', carDetails:'Audi, СА 4251 ВВ'},
        { date: new Date (2015, 5, 21, 9), speed: 12, place:'Plovdiv', carDetails:'Mazda, В 2121 АА'},
        { date: new Date ('02/05/2010'), speed: 50, place:'m.Hemus 12', carDetails:'Reno, ВТ 1200 ВБ'},
        { date: new Date (2020, 2, 1, 7), speed: 30, place:'Sliven', carDetails:'Audi, СА 0000 ВВ'}
    ];
    constructor() {}
    getDetails(): Array<IDetails> {
        return this.details;
    }
}   