import { Injectable } from '@angular/core';
import { IStatistic } from './models/details';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private http: HttpClient) {}

  getAll(skip: number, limit: number, vehicleId: string): Observable<IStatistic[]> {
    const params = new HttpParams()
      .set('skip', skip.toString())
      .set('limit', limit.toString())
      .set('vehicleId', vehicleId);

    const options = { params };
    return this.http.get<IStatistic[]>(
      `${environment.API_URL}/statistics`,
      options
    );
  }

  createStatistic(statistic: IStatistic): Observable<IStatistic> {
    return this.http.post<IStatistic>(
      `${environment.API_URL}/statistics`,
      statistic
    );
  }
}
