import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginFacade } from './facade/login.facade';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
    public form: FormGroup;
    constructor(private router: Router,
                private facade: LoginFacade) {
      this.form = new FormGroup({
          carNumber: new FormControl('', Validators.required)
      });
    }s
    login() {
        if(this.form.valid) {
            const vehicleData = this.form.value;
            this.facade.loginVehicle(vehicleData.carNumber);
        }
    }
}