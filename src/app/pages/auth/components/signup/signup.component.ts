import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private formBuilder: FormBuilder) { }

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

  previusClick() {
    this.submittedTwo = true;
    if (this.stepTwoForm.invalid) {
      return
    }
    this.termsCondition = true;
  }
}
