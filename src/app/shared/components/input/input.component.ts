import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() pattern: string;
  @Input() type: string;
  @Input() id: string;
  @Input() name: string;
  @Input() minlength: number;
  @Input() maxlength: number;
  disabled: boolean;
  control: FormControl;
  // isFormSubmitted: boolean = true;

  constructor() {
    this.control = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  isInvalidAndTouched(): boolean {
    return this.control.invalid && this.control.touched;
  }
}
