import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedComponent } from './shared.component';


@NgModule({
  declarations: [
    SharedComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [HeaderComponent, SidebarComponent]
})
export class SharedModule { }
