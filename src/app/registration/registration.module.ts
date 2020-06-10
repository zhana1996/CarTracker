import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { RegistrationPage } from './registration.page';
import { RegistrationPageRoutingModule } from './registration-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { registrationReducer } from './reducers/registration.reducers';
import { RegistrationEffect } from './effects/registration.effects';
import { RegistrationService } from './registration.service';
import { RegistrationFacade } from './facade/registration.facade';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('registration', registrationReducer),
    EffectsModule.forFeature([RegistrationEffect]),
    ExploreContainerComponentModule,
    RegistrationPageRoutingModule
  ],
  declarations: [RegistrationPage],
  providers: [RegistrationService, RegistrationFacade]
})
export class RegistrationPageModule {}