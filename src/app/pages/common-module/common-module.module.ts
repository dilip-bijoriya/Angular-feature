import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModuleRoutingModule } from './common-module-routing.module';
import { CommonModuleComponent } from './common-module.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    CommonModuleComponent
  ],
  imports: [
    CommonModule,
    CommonModuleRoutingModule,
    SharedModule,
    CardModule,
    ButtonModule
  ]
})
export class CommonModuleModule { }
