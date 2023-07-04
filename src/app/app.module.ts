import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToastrNotificationComponent } from './toastr-notification/toastr-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastrNotificationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      maxOpened: 1,
      positionClass: 'inline',
      toastClass: 'custom-toast',
      messageClass: 'custom-toast-message',
      autoDismiss: true,
      timeOut: 3000,
      iconClasses: {
        error: 'toast--error',
        success: 'toast--success',
        info: 'toast--info',
        warning: 'toast--warning',
      },
      toastComponent: ToastrNotificationComponent,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
