import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedComponent } from './shared.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalLogoutComponent } from './components/modal-logout/modal-logout.component';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CustomModalService } from '../services copy/custom-modal/custom-modal.service';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
@NgModule({
  declarations: [
    SharedComponent,
    HeaderComponent,
    SidebarComponent,
    InputComponent,
    ModalLogoutComponent,
    ModalConfirmComponent
  ],
  providers: [
    CustomModalService,
    BsModalRef
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    InputComponent,
    BsDropdownModule,
    ModalLogoutComponent,
    ModalConfirmComponent
  ],
})
export class SharedModule { }
