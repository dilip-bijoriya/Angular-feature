import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomToastrService {
  constructor(private toastrService: ToastrService) { }

  success(message: string, title?: string): void {
    console.log(message, "HELLO");
    this.toastrService.success(message, title);
  }

  error(
    message?: string,
    title?: string,
    override: Partial<IndividualConfig> = { closeButton: true, disableTimeOut: true }
  ) {
    this.toastrService.error(message, title, override);
  }

  warning(
    message: string,
    title?: string,
    override: Partial<IndividualConfig> = { closeButton: true, disableTimeOut: true }
  ) {
    this.toastrService.warning(message, title, override);
  }

  clear(toastId?: number): void {
    this.toastrService.clear(toastId);
  }
}
