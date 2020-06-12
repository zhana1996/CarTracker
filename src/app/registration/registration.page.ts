import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationFacade } from './facade/registration.facade';
import { IVehicle } from './models/vehicle';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.page.html',
  styleUrls: ['registration.page.scss']
})
export class RegistrationPage {
    public form: FormGroup;
    public createVehicle: IVehicle;
    constructor(private facade: RegistrationFacade) {
        this.form = new FormGroup({
            owner: new FormControl('', Validators.required),
            carDate: new FormControl('', Validators.required),
            carModel: new FormControl('', Validators.required),
            carNumber: new FormControl('', Validators.required),
            phoneNumber: new FormControl('', Validators.required)
        });
    }

    register(): void {
        if(this.form.valid) {
            this.createVehicle = this.form.value;
            this.facade.createVehicle(this.createVehicle);
            this.form.reset();
        }
    }
}