import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IVehicle } from '../registration/models/vehicle';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) {}  
      
    loginVehicle(carNumber: string): Observable<IVehicle>{
        return this.http.post<IVehicle>(`${environment.API_URL}/vehicle/login`, {carNumber});
    }
}   