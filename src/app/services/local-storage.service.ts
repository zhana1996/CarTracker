import { Injectable } from '@angular/core';
import { IVehicle } from '../registration/models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  get vehicle(): IVehicle {
    return JSON.parse(localStorage.getItem('vehicle'));
  }

  set vehicle(vehicle: IVehicle) {
    localStorage.setItem('vehicle', JSON.stringify(vehicle));
  }
}
