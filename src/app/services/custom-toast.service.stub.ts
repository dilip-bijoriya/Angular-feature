import { TOAST_CONFIG, ToastrService } from 'ngx-toastr';

export class CustomToastrServiceStub {
  success(value: string) {
    return;
  }
  error(value: string) {
    return;
  }
}

export class ToastrServiceStub {
  error(value: string) {
    return;
  }
  success(value: string) {
    return;
  }
  info(value: string) {
    return;
  }
  warning(value: string) {
    return;
  }
  clear(toastId?: number) {
    return;
  }
  remove(toastId: number): boolean {
    return true;
  }
}

export const TOASTR_HELPER = [
  { provide: TOAST_CONFIG, useValue: {} },
  { provide: ToastrService, useClass: ToastrServiceStub },
];
