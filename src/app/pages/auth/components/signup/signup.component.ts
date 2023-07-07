import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  stepOneForm: FormGroup;
  stepTwoForm: FormGroup;
  submittedOne = false;
  submittedTwo = false;
  showSignUp = false;
  termsCondition = false;
  loading = false;

  private readonly destroy$: Subject<void> = new Subject<void>();
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  get f() {
    return this.stepOneForm.controls;
  }

  get f1() {
    return this.stepTwoForm.controls;
  }

  ngOnInit(): void {
    this.stepOneForm = this.formBuilder.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
    })

    this.stepTwoForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(45)]],
      phone: ['', [Validators.required]]
    });
  }

  nextClick() {
    this.submittedOne = true;
    if (this.stepOneForm.invalid) {
      return
    }
    this.showSignUp = true;
  }

  backClick() {
    this.showSignUp = false;
  }

  secondNextClick() {
    this.submittedTwo = true;
    if (this.stepTwoForm.invalid) {
      return
    }
    this.termsCondition = true;
  }

  signUp(): void {
    if (this.loading) return;
    let map: any = { name: this.stepOneForm.value, ...this.stepTwoForm.value };
    this.loading = true;
    this.apiService
      .signUp(map)
      .pipe()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.toastr.success(res.message);
          this.router.navigate(['/auth/login']);
          this.loading = false;
        },
        error: (error) => {
          this.toastr.success(error.message);
          this.loading = false;
        },
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
