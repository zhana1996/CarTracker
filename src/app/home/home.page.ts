import { Component, OnInit } from '@angular/core';
import { IVehicle } from '../registration/models/vehicle';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public vehicle: IVehicle;

  constructor(private storageService: LocalStorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.vehicle = this.storageService.vehicle;
  }

  logOut(): void {
    localStorage.removeItem('vehicle');
    this.router.navigateByUrl('/login');
  }

}
