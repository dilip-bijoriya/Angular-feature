import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CookieService } from 'ngx-cookie-service';
import { CustomModalService } from 'src/app/services copy/custom-modal/custom-modal.service';
import { ModalLogoutComponent } from '../modal-logout/modal-logout.component';
import { filter } from 'rxjs';
import { ConfirmationModalText } from 'src/app/models/modal-texts';
import { ConfirmType } from 'src/app/models/modal-confirm';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cookieValue: any;
  bsModalRef: BsModalRef;
  searchTerm: string;
  constructor(
    private cookieService: CookieService,
    private CustomModalService: CustomModalService,
    private router: Router
  ) {
    const data = this.cookieService.get('web_basket');
    if (data) {
      this.cookieValue = JSON.parse(data);
    }
  }
  ngOnInit(): void {

  }

  logOut() {
    this.bsModalRef = this.CustomModalService.show(ModalLogoutComponent, {
      ignoreBackdropClick: false
    });
  }

  get confirmationText(): ConfirmationModalText {
    const confirmModalText: ConfirmationModalText = {
      titleAction: 'Product Update',
      descriptionMessage: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      confirmMessage: 'Are you sure you want to proceed?',
      confirmType: ConfirmType.YES_NO,
    };
    return confirmModalText;
  }

  confirmModel(): void {
    const confirmModalText: ConfirmationModalText = this.confirmationText;
    this.bsModalRef = this.CustomModalService.show(ModalConfirmComponent, {
      initialState: confirmModalText,
      class: 'modal-dialog--xs',
      ignoreBackdropClick: false
    });
    this.bsModalRef.content.onClose$
      .pipe(
        filter((result: boolean) => result)
      )
      .subscribe({
        next: () => {
          this.bsModalRef.hide();
        },
        error: () => {
        }
      });
  }

  onSearch() {
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      console.log(this.searchTerm);
      this.router.navigate(['/layout/products/product'], { queryParams: { search: this.searchTerm } });
    }
  }
}
