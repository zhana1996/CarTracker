import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IVehicle } from './models/vehicle';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {
    constructor(private http: HttpClient) {}  
      
    createVehicle(vehicle: IVehicle): Observable<string>{
        return this.http.post<string>(`${environment.API_URL}/vehicle`, vehicle);
    }
}   