import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CustomToastrService } from 'src/app/services/custom-toastr.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  submitted = false

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private toastr: CustomToastrService
  ) { }

  get f() {
    return this.forgotForm.controls;
  }
  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.forgotForm.invalid) {
      return;
    }
    let map: any = { ...this.forgotForm.value };
    this.apiService.forgotPassword(map).pipe().subscribe({
      next: (res: any) => {
        this.toastr.success(res.message);
      },
      error: (err) => {
        this.toastr.success(err.message);
      }
    });
  }
}
