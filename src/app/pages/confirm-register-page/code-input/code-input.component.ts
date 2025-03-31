import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgClass
  ],
  animations: [
    trigger('bounce', [
      transition(':enter, * => incorrect', [
        animate('600ms ease-in-out', keyframes([
          style({ transform: 'translateY(0)', offset: 0 }),
          style({ transform: 'translateY(-10px)', offset: 0.3 }),
          style({ transform: 'translateY(0)', offset: 0.6 }),
          style({ transform: 'translateY(-5px)', offset: 0.8 }),
          style({ transform: 'translateY(0)', offset: 1 }),
        ]))
      ])
    ])
  ]
})
export class CodeInputComponent {
  codeForm: FormArray<FormControl<string | null>>;
  allFieldsFilled: boolean = false;
  errorState = false;
  animationStates: string[] = [];

  constructor(private fb: FormBuilder) {
    this.codeForm = new FormArray<FormControl<string | null>>(
      Array(6).fill(null).map(() => new FormControl<string | null>(null))
    );
    this.animationStates = Array(6).fill('initial');
  }

  onInput(index: number, event: any) {
    const input = event.target;
    const value = input.value;

    if (value && isNaN(Number(value)) && value !== ' ') {
      input.value = '';
    }


    if (input.value && index < this.codeForm.length - 1) {
      (document.getElementById(`code-${index + 1}`) as HTMLInputElement)?.focus();
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace' && index > 0) {
      if (!input.value) {
        (document.getElementById(`code-${index - 1}`) as HTMLInputElement)?.focus();
      }
    }
  }

  getControl(index: number): FormControl<string | null> {
    return this.codeForm.at(index) as FormControl<string | null>;
  }

  validateCode() {
    const enteredCode = this.codeForm.controls.map(control => control.value).join('');
    const correctCode = '123456';

    if (enteredCode !== correctCode) {
      this.codeForm.controls.forEach(control => control.setErrors({ incorrect: true }));

      this.errorState = true;

      this.triggerAnimations();

      return false;
    }

    this.errorState = false;
    return true;
  }

  triggerAnimations() {
    this.animationStates.fill('initial');

    this.animationStates.forEach((_, i) => {
      setTimeout(() => {
        this.animationStates[i] = 'incorrect';
      }, i * 100);
    });

    setTimeout(() => {
      this.animationStates.fill('initial');
    }, 700);
  }
}
