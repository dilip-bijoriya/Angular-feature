import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    CardModule,
    ButtonModule
  ]
})
export class LandingModule { }
