import { Component } from '@angular/core';
import { Toast, ToastPackage, ToastrService } from 'ngx-toastr';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SafeHtml } from '@angular/platform-browser';

export class TranslateMeta {
  entityName: string;
}

@Component({
  selector: 'app-toastr-notification',
  templateUrl: './toastr-notification.component.html',
  styleUrls: ['./toastr-notification.component.scss'],
  animations: [
    trigger('flyInOut', [
      state(
        'inactive',
        style({
          display: 'none',
          opacity: 0,
        })
      ),
      state('active', style({ opacity: 1 })),
      state('removed', style({ opacity: 0 })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => removed', animate('300ms ease-in')),
    ]),
  ],
})
export class ToastrNotificationComponent extends Toast {
  constructor(protected override toastrService: ToastrService, public override toastPackage: ToastPackage) {
    super(toastrService, toastPackage);
  }

  get messageText(): string | SafeHtml {
    // @ts-ignore strictNullChecks
    return this.message.split('|')[0];
  }

  get translateParams(): TranslateMeta {
    // @ts-ignore strictNullChecks
    return { entityName: this.message.split('|')[1] };
  }

}
