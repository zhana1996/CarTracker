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
      
    getVehicle(number: string): Observable<IVehicle>{
        const params = new HttpParams().set('number', number),
        options = {params};
        return this.http.get<IVehicle>(`${environment.API_URL}/getVehicle`, options);
    }
}   