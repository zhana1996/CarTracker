import { Injectable } from "@angular/core";
import { IStatistic } from './models/details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StatisticsService {
    constructor(private http: HttpClient) {}  
      
    getAll(): Observable<IStatistic[]> {
        return this.http.get<IStatistic[]>(`${environment.API_URL}/statistics`);
    }
}   