import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { LoginService } from './login.service';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './reducers/login.reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from './effects/login.effects';
import { LoginFacade } from './facade/login.facade';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('login', loginReducer),
    EffectsModule.forFeature([LoginEffect]),
    ExploreContainerComponentModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage],
  providers: [LoginService, LoginFacade]
})
export class LoginPageModule {}