import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private ApiService: ApiService,
    private toastr: ToastrService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(65)]]
    });
  }

  onSubmit(): void {
    if (this.loading) return;
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    let map: any = { ...this.form.value };
    this.loading = true;
    this.ApiService.signIn(map).pipe().subscribe({
      next: (res: any) => {
        this.toastr.success(res.message);
        this.router.navigate(['/layout']);
        this.cookieService.set('web_basket', JSON.stringify(res.response));
        this.loading = false;
      },
      error: (error) => {
        this.toastr.error(error.error.message || error.message);
        this.loading = false;
      }
    })
  }

}
